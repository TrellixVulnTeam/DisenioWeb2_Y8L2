const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productosSchema= new Schema({
    nombre:{
        type:String,
        trim:true
    },
    descripcion:{
        type:String,
        trim:true
    },
    cantidad:{
        type:Number,
        trim:true
    },
    stock:{
        type:Number,
        trim:true
    },
    talla:{
        type: String,
        trim:true
    }
});

module.exports = mongoose.model('Productos',productosSchema);