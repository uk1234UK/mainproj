const mongoose = require("mongoose");
const essaySchema = new mongoose.Schema({
    username:{
        type:String,
        required:false
    },
    question:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false,
    },
    userresponse:{
        type:String,
        required:false
    },
})

// creating collections

const essay = new mongoose.model("essay",essaySchema)
module.exports = essay;