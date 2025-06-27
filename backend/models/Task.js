const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // every task must have a title
    },
    completed: {
        type: Boolean,
        default: true // new tasks are not completed by default
    }
},{
    timestamps: true // Adds 'createdAt' and 'updatedAt' automatically
})


module.exports = mongoose.model("Task", TaskSchema);