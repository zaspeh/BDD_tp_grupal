const mongoose = require('mongoose');

const MongoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('MongoItem', MongoItemSchema);