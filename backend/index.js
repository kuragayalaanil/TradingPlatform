require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { positionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await positionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", (req, res) => {
  const { name, qty, price, mode } = req.body;
  let newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
  });
  newOrder.save();
  res.send("Order Saved!");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
  mongoose.connect(URL);
  console.log("DB Connected Sucessfully");
});
