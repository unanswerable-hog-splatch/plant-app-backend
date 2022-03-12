const { Schema } = require('mongoose');
// Require taskSchema to nest in Plant schema
const taskSchema = require('./Task')

// Plant is only a schema. To be nested in Planters. Task schema to be nested in Plant schema.
const plantSchema = new Schema({
    plantType: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
    },
    dateAdded: {
        type: Date,
    },
    tasks: [taskSchema],
});

module.exports = plantSchema;