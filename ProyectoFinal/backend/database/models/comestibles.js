const mongoose = require('mongoose');

const comestibleSchema = mongoose.Schema({
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
    restaurante: {
        type: String,
        required: true
    },
    tipo_comestible: {
        type: String,
        required: false
    },
    marca: {
        type: String,
        required: true
    },
    clase_comestible: {
        type: Number,
        required: true
    },
    linea_comestible: {
        type: String,
        required: true
    },
    unidad_medida: {
        type: String,
        required: true
    }
});

const Comestibles = mongoose.model('Comestibles', comestibleSchema);

module.exports = Comestibles;