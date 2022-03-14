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
    watered: {
        type: Boolean,
        required: true,
        default: true,
    },
    fertilized: {
        type: Boolean,
        default: false,
    },
    waterFrequency: {
        type: Number,
        required: true,
    },
    fertilizeFrequency: {
        type: Number,
    },
    lastWaterDate: {
        type: Date,
        required: true,
    },
    lastFertilizeDate: {
        type: Date,
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