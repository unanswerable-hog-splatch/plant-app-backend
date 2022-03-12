const { Schema, model } = require('mongoose');
// Require taskSchema to nest in Plant schema
const taskSchema = require('./Task')

// Plant is only a schema. To be nested in Planters. Task schema to be nested in Plant schema.
const plantSchema = new Schema({
    plantType: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
    },
    dateAdded: {
        type: Date,
    },
    watered: {
        type: Boolean,
        required: true,
        default: true,
    },
    fertilized: {
        type: Boolean,
        required: true,
        default: false,
    },
    tasks: [taskSchema],
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;