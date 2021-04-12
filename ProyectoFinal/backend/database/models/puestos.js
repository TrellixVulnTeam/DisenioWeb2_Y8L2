const mongoose = require('mongoose');

const puestosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    interno: {
        type: String,
        required: true
    }, 
    externo: {
        type: String,
        required: true
    },
    rol_restaurante: {
        type: String,
        required: true
    }
});

const Puestos = mongoose.model('Puestos', puestosSchema);

module.exports = Puestos;