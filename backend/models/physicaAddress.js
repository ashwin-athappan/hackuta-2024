const {Schema, model} = require('mongoose');

const physicalAddressModel = new Schema({
    street: {
        type: String,
        required: true,
    },
    apt: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    },
});

const PhysicalAddress = model('PhysicalAddress', physicalAddressModel);
module.exports = {PhysicalAddress, physicalAddressModel};
