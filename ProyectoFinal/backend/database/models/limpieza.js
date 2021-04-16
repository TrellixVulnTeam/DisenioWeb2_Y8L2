const mongoose = require('mongoose');

const limpiezaSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    nombre_restaurante: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Limpieza = mongoose.model('Limpieza', limpiezaSchema);

module.exports = Limpieza;