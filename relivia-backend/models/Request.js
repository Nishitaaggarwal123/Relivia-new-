const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  location: String,
  description: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
