const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
    questionid: {
      type: Number,
      required: true,
    },
    correctanswer: {
      type: String,
      required: false,
  
    },
    useranswer: {
      type: String,
      required: true,
    },
  });
  const essaySchema = new mongoose.Schema({
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
        required:true
    },
})
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false,
        // unique:true
    },
    quiz:[quizSchema],
    essayQ:[essaySchema],  
})

// creating collections

const Register = new mongoose.model("Register",userSchema)
module.exports = Register;