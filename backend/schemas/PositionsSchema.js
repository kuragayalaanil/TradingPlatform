const mongoose = require("mongoose");

const positionsSchema = mongoose.Schema({
  product: {
    type: String,
  },
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
  isLoss: {
    type: String,
  },
});

module.exports = { positionsSchema };
