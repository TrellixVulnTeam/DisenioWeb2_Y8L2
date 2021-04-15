const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    cantidadClientes: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    }
});

const Restaurante = mongoose.model('restaurantes', restauranteSchema);

module.exports = Restaurante;

