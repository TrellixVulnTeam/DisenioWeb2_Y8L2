const mongoose = require('mongoose');


const bitacoraSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    fecharango: {
        type: Date,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    fechaini: {
        type: Date,
        required: true
    },
    fechafin: {
        type: Date,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    }
});

const bitacora = mongoose.model('bitacora',bitacoraSchema);

module.exports =  bitacora;