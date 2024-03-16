const mongoose = require("mongoose");
const todoSchema = require("../model/todo");
const apiRouter = require("express").Router();

const Todo = mongoose.model("Todo", todoSchema);

apiRouter.get("/getTodos", async (req, res) => {
  await Todo.find({}).then((todos) => {
    res.json(todos);
  });
});

apiRouter.post("/addTodo", async (req, res) => {
  const title = req.body.title;
  const status = "active";

  if (!title) {
    res.status(422).json({ err: "Empty Todo Title" })
    return
  }

  const todo = await new Todo({
    title: title,
    status: status,
  });

  todo.save().then((result) => {
    res.json(201).json(result);
  });
});

apiRouter.patch("/changeTodo/:id", async (req, res, next) => {
  const id = req.params.id;
  const newStatus = req.body.status;

  if(!newStatus){
    res.status(422).json({err: "No Status Provided to Update"})
    return;
  }
  try{
    let oldData =  await Todo.findById(id)
  
    let modifiedData = {...oldData["_doc"], status: newStatus}
  
    let update = await Todo.findByIdAndUpdate(id, modifiedData)
  
    res.status(200).json(update)
  }catch(error){
    next(error)
  }
})

apiRouter.delete("/deleteTodo/:id", async (req, res, next) => {
  const id = req.params.id;

  try{
    let deleted = await Todo.findByIdAndDelete(id)
    res.json(deleted)
  } catch(error){
    next(error)
  }
})

module.exports = apiRouter;
