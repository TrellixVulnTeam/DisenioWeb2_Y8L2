const mongoose = require('mongoose');

const rolentosSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    }, 
    descripcion: {
        type: String,
        required: true
    }
});

const Rolentos = mongoose.model('Rolentos', rolentosSchema);

module.exports = Rolentos;