
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/jobmaDB", {useNewUrlParser:true});