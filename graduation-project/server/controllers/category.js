const httpStatus = require('http-status');
const pool = require('../loaders/pg');
class Categories {
  async getCategories(req, res) {
    try {
      const datas = await (await pool.query('SELECT * FROM categories ORDER BY parent_id, sort_order, name')).rows;
      res.status(httpStatus.OK).json(datas);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error has ocurred',
        error,
      });
    }
  }
}

module.exports = new Categories();
