const mongoose = require("mongoose");
const questionsSchema = new mongoose.Schema({
  questionId: { type: String },
  questionText: { type: String, required: true, unique: true },
  options: { type: Array, required: true },
  marks: { type: Number, required: true },
  difficultyLevel: { type: Number },
  questionType: { type: String, required: true },
  correctOptions: { type: Array, required: true },
  addedAt: { type: Date, default: Date.now }
});
const quest = new mongoose.model("quest",questionsSchema)
module.exports = quest;
