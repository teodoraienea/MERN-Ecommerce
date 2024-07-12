const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Add Product
router.post(
  '/',
  [auth, upload.single('image')],
  [
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('category', 'Category is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, category, description } = req.body;
    const imageUrl = req.file.path;

    try {
      const newProduct = new Product({
        name,
        price,
        category,
        description,
        imageUrl
      });

      const product = await newProduct.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Get Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
