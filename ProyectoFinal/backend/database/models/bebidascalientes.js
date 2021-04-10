const mongoose = require('mongoose');

const bebidaCalienteSchema = new mongoose.Schema({
        codigo: {
            type: String,
            required: true
        },
        nombre:  {
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
        restaurante: {
            type: String,
            required: true
    
        },
        descripcion: {
            type: String,
            required: true
        }
});

const BebidasCalientes = mongoose.model('BebidasCalientes', bebidaCalienteSchema);

module.exports = BebidasCalientes;