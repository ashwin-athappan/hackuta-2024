const {Schema, model} = require('mongoose');

const accountSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isActivated: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        required: true,
    },
});

const Account = model('account', accountSchema);
module.exports = Account;