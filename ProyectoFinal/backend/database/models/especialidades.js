const mongoose = require('mongoose');


const especialidadesSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    detalle: {
        type: String,
        required: false
    }
});

const especialidades = mongoose.model('especialidades', especialidadesSchema);

module.exports = especialidades;