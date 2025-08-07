const mongoose = require("mongoose");

const HoldingsSchema = mongoose.Schema({
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
});
module.exports = { HoldingsSchema };
