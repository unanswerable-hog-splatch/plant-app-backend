const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


// Planter is basically user
const gardenerSchema = new Schema(
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
gardenerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };

    next();
});

// compare and validate password to log in
gardenerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// plantCount virtual
gardenerSchema.virtual('plantCount'). get(function() {
    return this.plantList.length;
});

const Gardener = model("Gardener", gardenerSchema);

module.exports = Gardener;
