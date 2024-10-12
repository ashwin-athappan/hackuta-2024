const {Schema, model} = require('mongoose');

const accountSchema = new Schema({

    email: {
        type: String,
        required: true,
    },
});