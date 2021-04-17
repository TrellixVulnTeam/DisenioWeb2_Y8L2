const mongoose = require('mongoose');

const cajasSchema = mongoose.Schema({
    codigo: {
        type: String, 
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    primer_apellido: {
        type: String,
        required: true
    },
    segundo_apellido: {
        type: String,
        required: true
    },
    telefono1: {
        type: String,
        required: true
    },
    telefono2: {
        type: String
    },
    login: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    tipo_administrador: {
        type: String,
        required: true
    }
});

const Cajas = mongoose.model('Cajas', cajasSchema);

module.exports = Cajas;