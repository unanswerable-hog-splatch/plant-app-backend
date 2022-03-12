const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Require plantSchema when complete
const Plant = require('./Plant')

// Planter is basically user
const farmerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
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
        plants: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Plant',
            },
          ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
farmerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };

    next();
});

// compare and validate password to log in
farmerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// plantCount virtual
farmerSchema.virtual('plantCount'). get(function() {
    return this.plantList.length;
});

const Farmer = model("Farmer", farmerSchema);

module.exports = Farmer;
