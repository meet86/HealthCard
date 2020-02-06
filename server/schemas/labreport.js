const mongoose = require("mongoose");
var labreport = new mongoose.Schema({
  labid:String,
  userid: String,
  report: String,
  
});
var labreport = mongoose.model("labreport", labreport);

module.exports = labreport;
