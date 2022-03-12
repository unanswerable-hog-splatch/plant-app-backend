const { Schema, model } = require('mongoose');

// Task is only a schema. Does not require model as it will be nested inside Plant's schema, which is nested within Planter's model.
const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    frequency: {
        type: Number,
        required: true,
    },
    taskStartDate: {
        type: Date,
        required: true,
    },
});

const Task = model("Task", taskSchema);

module.exports = taskSchema