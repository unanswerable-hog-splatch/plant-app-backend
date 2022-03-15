const { Schema, model } = require('mongoose');
// Require taskSchema to nest in Plant schema

// Plant is only a schema. To be nested in Planters. Task schema to be nested in Plant schema.
const plantSchema = new Schema({
    plantType: {
        type: String,
        required: true,
    },
    plantIcon: {
        type: String,
        required: true,
        default: 'cactus',
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
        required: true
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
    }
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;