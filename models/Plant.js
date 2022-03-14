const { Schema, model } = require('mongoose');
// Require taskSchema to nest in Plant schema

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
    fertilized: {
        type: Boolean,
        required: true,
        default: false,
    },
    watered: {
        type: Boolean,
        required: true,
        default: true,
    },
    frequency: {
        type: Number,
        required: true,
    },
    taskStartDate: {
        type: Date,
        required: true,
    },
    // tasks: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: 'Task',
    //     },
    //   ],
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;