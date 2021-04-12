const mongoose = require('mongoose');

const mesasSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    cantidad_sillas: {
        type: Number,
        required: true
    },
    nombre_restaurante: {
        type: String,
        required: true
    }
});

const Mesas = mongoose.model('Mesas', mesasSchema);

module.exports = Mesas;