const mongoose = require("mongoose");

const { positionsSchema } = require("../schemas/PositionsSchema");

const positionsModel = mongoose.model("Position", positionsSchema);

module.exports = { positionsModel };
