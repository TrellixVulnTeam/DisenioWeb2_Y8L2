const mongoose = require('mongoose');

const consecutivosSchema = mongoose.Schema({
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
        type: String
    }
});

const Consecutivo = mongoose.model('Consecutivo', consecutivosSchema);

module.exports = Consecutivo;