const mongoose = require('mongoose');

const udmExportSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    escala: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    simbolo : {
        type: String,
        required: true
    },
    simbologia: {
        type: String,
        required: true
    }
});

const UDM = mongoose.model('UDM', udmExportSchema);

module.exports = UDM;