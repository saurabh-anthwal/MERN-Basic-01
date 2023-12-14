const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
