const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({
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

const Equipos = mongoose.model('Equipos', equipoSchema);

module.exports = Equipos;