const mongoose = require("mongoose");
var userschemas = new mongoose.Schema({
  userId: String,
  firstname: String,
  lastname: String,
  address: String,
  contact: String,
  dob: Date,
  blood: String,
  email: String,
  userType: String
});
var user = mongoose.model("user", userschemas);

module.exports = user;