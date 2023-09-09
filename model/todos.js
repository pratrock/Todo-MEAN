var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
  todo: { type: String },
  isTodo: { type: Boolean, default: true },
  progress: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
});

var model = mongoose.model("todolist", todoSchema);
module.exports = model;
