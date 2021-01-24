const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    }
});

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    }, 
    suite: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    geo: [geoSchema]
});


const companySchema = new mongoose.Schema({
    namecompany: {
        type: String,
        required: true
    }, 
    catchphrase: {
        type: String,
        required: true
    },
    bs: {
        type: String,
        required: true
    }
});

const peopleSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    address: [addressSchema],
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    company: [companySchema]
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;