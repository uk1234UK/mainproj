const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  username: {
    type: String,
  },
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
    required: false,
  },
});
// creating collections
const quiz = new mongoose.model("mcq", quizSchema);
module.exports = quiz;
