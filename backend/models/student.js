const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");
const crypto = require('crypto');

const studentSchema = new Schema({
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
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    sevisId: {
        type: String,
        default: crypto.randomBytes(10).toString('hex'),
    },
    passportNumber: {
        type: String,
    },
    i94Number: {
        type: String,
        default: crypto.randomBytes(14).toString('hex')
    },
    dateOfEntry: {
        type: Date,
    },
    hasLease: {
        type: Boolean,
        default: false,
    },
    leaseDocument: {
        type: String,
    },
    physicalAddresses: {
        type: String,
    },
    apartmentNumber: {
        type: String,
    },
    roommates: {
        type: Number,
    },
    distanceFromCampus: {
        type: Number,
    }
});

const Student = model('student', studentSchema);
module.exports = Student;