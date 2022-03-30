const httpStatus = require('http-status');
const pool = require('../loaders/pg');
const { esClient } = require('../loaders/elasticsearch');
const logger = require('../logger/logger');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const config = require('../config');
config();
class Products {
  async getTrendProducts(req, res) {
    try {
      const datas = await (await pool.query('SELECT * FROM product ORDER BY date DESC LIMIT 8')).rows;
      res.status(httpStatus.OK).json(datas);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }

  async getProductById(req, res) {
    const id = req.params.id;
    try {
      const product = await (await pool.query('SELECT * FROM product WHERE id=$1', [id])).rows[0];
      res.status(httpStatus.OK).json({ product });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }

  async getDatatable(req, res) {
    let { sort, page, per_page, search } = req.query;
    try {
      let sort_type = (sort == 'date') ? 'DESC' : 'ASC'
      const datas = await (
        await pool.query(`SELECT *, to_char( date, 'DD-MON-YYYY') as date_format	FROM product	WHERE lower(title) LIKE '%${search}%' OR lower(category) LIKE '%${search}%' ORDER BY ${sort} ${sort_type} LIMIT ${per_page} OFFSET ${(page - 1) * per_page}`)
      ).rows;
      const totalCount = await (await pool.query('SELECT COUNT(*) FROM product')).rows[0]?.count;
      const response = {
        status: true,
        total: parseInt(totalCount),
        last_page: Math.ceil(totalCount / per_page),
        per_page: parseInt(per_page),
        current_page: parseInt(page),
        next_page_url: `http://localhost:3000/product/fordatatable?sort=${sort}&page=${page + 1}&per_page=4`,
        prev_page_url: `http://localhost:3000/product/fordatatable?sort=${sort}&page=${page - 1 > 0 ? page - 1 : 1}&per_page=4`,
        from: (page - 1) * per_page + 1,
        to: page * per_page,
        data: datas,
      };
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }

  async postProduct(req, res) {
    let d = req.body;
    try {
      if (req.file) {
        const { filename: image } = req.file;

        await sharp(req.file.path).resize({ width: 320, height: 240, fit: sharp.fit.fill }).toFile(path.resolve(req.file.destination, 'uploads', image));
        fs.unlinkSync(req.file.path);
        await pool.query(`insert into product 
                (title, img, category, status, description, sales, stock) 
                values ('${d.title}','http://localhost:3000/public/uploads/${image}','${d.category}','${d.status}','${d.description}',${d.sales},${d.stock})`);

        res.status(httpStatus.CREATED).json({
          message: 'Created product successfully',
        });
      } else {
        res.status(httpStatus.BAD_REQUEST).json({
          message: 'Please add image',
        });
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }
  async deleteProduct(req, res) {
    const ids = req.body.id?.join();
    if(!ids) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: 'An unexpected error occurred',
      });
      return;
    }
    try {
      let files = await (await pool.query(`SELECT img FROM product WHERE id IN (${ids})`)).rows;
      files.forEach(function(filePath) {
        let remove_img = filePath.img.replace("http://localhost:3000", ".")
        fs.access(remove_img, error => {
            if (!error)  fs.unlinkSync(remove_img);
        });
      });
      await (await pool.query(`DELETE FROM product WHERE id IN (${ids})`)).rows;
      res.status(httpStatus.OK).json({
        message: 'The product has been deleted'
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }

  getProductElastic(req, res) {
    console.log(req.query?.search);
    let request_query = {}
    if(req.query?.search) {
      request_query = {
        match_phrase_prefix: {
          title: req.query?.search,
        }
      }
    } else {
      request_query = {
        match_all : {}
      }
    }
    esClient.search(
      {
        index: process.env.ELASTICSEARCH_DB_NAME,
        body: {
          query: request_query
        },
      },
      (err, rest) => {
        if (err) {
          console.log(err);
        } else {
          logger.log({
            level: 'info',
            message: 'Sorunsuz Çalışıyor',
          });
          let response = rest?.hits?.total?.value === 0 ? 'Bulunamadı' : rest.hits.hits;
          return res.status(httpStatus.OK).json(response);
        }
      }
    );
  }

  postProductElastic(req, res) {
    esClient.index(
      {
        index: process.env.ELASTICSEARCH_DB_NAME,
        body: req.body,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(httpStatus.OK).json('data');
        }
      }
    );
  }
}
module.exports = new Products();
