const mongoose = require('mongoose');


const infocontactoSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    detalleempresa: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    foto: {
        type: String,
        required: false
    }
});

const infoContacto = mongoose.model('infoContacto', infocontactoSchema);

module.exports = infoContacto;