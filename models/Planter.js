const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Require plantSchema when complete

// Planter is basically user
const planterSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        plantList: [plantSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
planterSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };

    next;
});

// compare and validate password to log in
planterSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// plantCount virtual
planterSchema.virtual('plantCount'). get(function() {
    return this.plantList.length;
});

const Planter = model("Planter", planterSchema);

module.exports = Planter;