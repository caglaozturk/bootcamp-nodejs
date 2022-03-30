const express = require('express');
const ProductController = require('../controllers/product');
const accepted_image_types = ["image/jpeg","image/jpg","image/png"]

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if(accepted_image_types.includes(file.mimetype)) cb(null, true);
  else cb(null, false);
}
var upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
})

const router = express.Router();

router.get('/gettrendproduct', ProductController.getTrendProducts);
router.get('/getproductbyid/:id', ProductController.getProductById);
router.post('/create',upload.single('img'), ProductController.postProduct);
router.post('/productEl', ProductController.postProductElastic);
router.get('/productElg', ProductController.getProductElastic);
router.get('/fordatatable', ProductController.getDatatable);
router.delete('/delete', ProductController.deleteProduct);

module.exports = router;
