const mongoose = require('mongoose');

const bufetSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }, 
    precio: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    unidad_medida: {
        type: String,
        required: true
    }
});

const Bufet = mongoose.model('Bufet', bufetSchema);

module.exports = Bufet;