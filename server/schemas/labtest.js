const mongoose = require("mongoose");
var labtest = new mongoose.Schema({
  userId:String,
  test: String,
});
var lab = mongoose.model("labtest", labtest);

module.exports = lab;
