const mongoose = require('mongoose');

const consecutivoSchema = new mongoose.Schema({
    tipo_consecutivo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor_consecutivo: {
        type: String,
        required: true
    },
    prefijo_consecutivo: {
        type: String,
        required: true
    },
    prefijo: {
        type: String,
        required: true
    }
});

module.exports = consecutivoSchema;