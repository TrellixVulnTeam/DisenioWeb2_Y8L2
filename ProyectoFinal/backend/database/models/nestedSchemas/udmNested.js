const mongoose = require('mongoose');

const udmNestedSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    escala: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    simbolo : {
        type: String,
        required: true
    },
    simbología: {
        type: String,
        required: true
    }
});

module.exports = udmNestedSchema;