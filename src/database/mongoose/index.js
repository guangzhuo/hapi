// mongoose入口
const mongoose = require("mongoose");
// const uri = `mongodb://${DB.host}:${DB.port}`;
const URL =
  "mongodb+srv://root:1qaz2wsx@cluster0.ggcz5.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
mongoose.connect(URL);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connection success");
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});
module.exports = mongoose;
