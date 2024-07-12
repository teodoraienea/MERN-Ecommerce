const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'distributor', 'customer'], default: 'customer' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
