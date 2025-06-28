const express = require("express");
const router = express.Router();
const Task = require("../models/Task")

// to get all the tasks
router.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

// create a new task
router.post('/', async (req, res) => {
    const newTask = new Task({
        title: req.body.title
    })
    const savedTask = await newTask.save()
    res.json(savedTask)
})

// update the task (ex. mark complete)
router.put('/:id', async(req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,          // which task to update
        req.body,               // new data to apply
        {new: true}            // return the updated document
    );
    res.json(updatedTask)
})

// delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({message: "Task deleted"})
})

module.exports = router