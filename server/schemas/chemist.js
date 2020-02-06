const mongoose = require('mongoose')
var chemistschema = new mongoose.Schema({
    userId:String,
    licence: String,
    shopname: String,
    DOE:Date,
    address:String
});
var chemist = mongoose.model("chemist", chemistschema);

module.exports = chemist;