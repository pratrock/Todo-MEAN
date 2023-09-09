var express = require("express");
var router = express.Router();
var Todos = require("../model/todos.js");
module.exports = router;
router.get("/todos", async (req, res) => {
  const todos = await Todos.find({});
  res.json(todos);
});

router.post("/addTodos", async (req, res) => {
  var todo = new Todos({
    todo: req.body.todo,
    isTodo: req.body.isTodo,
    progress: req.body.progress,
    completed: req.body.completed,
  });

  const todos = await todo.save(todo);
  res.status(201).json(todos);
});
router.put("/changeProgress/:id", async (req, res) => {
  var id = req.params.id;
  const todos = await Todos.updateOne(
    { _id: id },
    { $set: { isTodo: false, progress: true, completed: false }, new: true }
  );
  res.status(201).json(todos);
});

router.put("/changeDone/:id", async (req, res) => {
  var id = req.params.id;
  const todos = await Todos.updateOne(
    { _id: id },
    { $set: { isTodo: false, progress: false, completed: true }, new: true }
  );
  res.status(201).json(todos);
});

router.put("/changeTodo/:id", async (req, res) => {
  var id = req.params.id;
  const todos = await Todos.updateOne(
    { _id: id },
    { $set: { isTodo: true, progress: false, completed: false }, new: true }
  );
  res.status(201).json(todos);
});

router.put("/deleteTodo/:id", async (req, res) => {
  var id = req.params.id;
  const todos = await Todos.deleteOne({ _id: id });
  res.status(201).json(todos);
});

router.get("/getTodo/:id", async (req, res) => {
  var id = req.params.id;
  const todos = await Todos.findById({ _id: id });
  res.status(201).json(todos);
});

router.put("/updateTodo/:id", async (req, res) => {
  var id = req.params.id;
  const { todo, isTodo, progress, completed } = req.body;
  const todos = await Todos.updateOne(
    { _id: id },
    { $set: { todo, isTodo, progress, completed }, new: true }
  );
  res.status(201).json(todos);
});

module.exports = router;
