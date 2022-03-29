const { Schema, model } = require('mongoose');
// Require taskSchema to nest in Plant schema

// Plant is only a schema. To be nested in Planters. Task schema to be nested in Plant schema.
const plantSchema = new Schema({
    species: {
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
        required: true,
        default: (new Date().setHours(0, 0, 0, 0) / 1000),
    },
    watered: {
        type: Boolean,
        required: true,
        default: false,
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
    wateredDates: [
        {
            type: Date,
        },
    ],
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;