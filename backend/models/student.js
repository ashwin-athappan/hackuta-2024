const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");
const crypto = require('crypto');

const studentSchema = new Schema({
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
    sevisId: {
        type: String,
        required: crypto.randomBytes(10).toString('hex'),
    },
    passportNumber: {
        type: String,
        required: true,
    },
    i94Number: {
        type: String,
        default: crypto.randomBytes(14).toString('hex')
    },
    dateOfEntry: {
        type: Date,
        required: true,
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
        required: true,
    }
});

const Student = model('student', studentSchema);
module.exports = Student;