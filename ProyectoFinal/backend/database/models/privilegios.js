const mongoose = require('mongoose');


const privilegiosSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    adminsistema: {
        type: String,
        required: true
    },
    adminseguridad: {
        type: String,
        required: true
    },
    adminrest: {
        type: Number,
        required: true
    },
    admincuentas: {
        type: String,
        required: false
    }
});

const privilegios = mongoose.model('privilegios', privilegiosSchema);

module.exports = privilegios;