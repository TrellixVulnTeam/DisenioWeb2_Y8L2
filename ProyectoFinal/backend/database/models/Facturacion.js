const mongoose = require('mongoose');


const facturacionSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    dineroentrada: {
        type: Number,
        required: true
    },
    cajaapertura: {
        type: Number,
        required: false
    },
    cajacierre: {
        type: Number,
        required:true
    },
    restaurante:{
        type:String,
        required: true
    },
    estadocuenta:{
        type:Number,
        required:true
    }
    
});

const facturacion = mongoose.model('facturacion',facturacionSchema);

module.exports =  facturacion;