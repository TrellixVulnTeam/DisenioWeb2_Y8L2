const mongoose = require('mongoose');

const detalleSchema = new mongoose.Schema({
    detalle: {
        type: String,
        required: true
    }
});

const DetalleUDM = mongoose.model('DetalleUDM', detalleSchema);

module.exports = DetalleUDM;