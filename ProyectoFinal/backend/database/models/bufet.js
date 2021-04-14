const mongoose = require('mongoose');

// cisnisndf 

const bufetSchema = new mongoose.Schema({
    bufetId: {
        type: String, 
        required: false
    },
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