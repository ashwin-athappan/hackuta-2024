const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");
const crypto = require('crypto');

const adminSchema = new Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

const Admin = model('admin', adminSchema);
module.exports = Admin;