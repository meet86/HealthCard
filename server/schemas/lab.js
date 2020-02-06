const mongoose = require("mongoose");
var labSchema = new mongoose.Schema({
  userId:String,
  licence: String,
  labname: String,
  DOE:Date,
  address:String
});
var lab = mongoose.model("lab", labSchema);

module.exports = lab;
