const mongoose = require("../mongoose");
const { Schema, model } = mongoose;
const carSchema = new Schema({
  name: String,
  date: String,
});

module.exports = model("listingsAndReviews", carSchema, "listingsAndReviews");
