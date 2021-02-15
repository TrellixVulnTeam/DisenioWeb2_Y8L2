const mongoose = require('mongoose');


const info_contacto = mongoose.Schema({
    
});

const info_marca = mongoose.Schema({
    
});

const marcas = mongoose.Schema({
    info_contacto: [info_contacto],
    info_marca: [info_marca]
});

module.exports = marcas;