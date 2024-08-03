const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  inStock:{type: Boolean, default: true},
  favourite: { type: Boolean, default: false},
});

module.exports = mongoose.model('Product', ProductSchema);
