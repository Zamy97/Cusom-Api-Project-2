const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    balance: {
        type: number,
        default: 0
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;