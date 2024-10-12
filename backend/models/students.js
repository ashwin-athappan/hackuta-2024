const {Schema, model} = require('mongoose');
const {physicalAddressModel} = require("./physicaAddress");

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
    sevisID: {
        type: String,
        required: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    },
    physicalAddress: {
        type: physicalAddressModel,
        required: true
    },
});

const Student = model('Student', studentSchema);
module.exports = Student;