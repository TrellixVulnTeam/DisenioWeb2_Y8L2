const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');


const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/pantalonesdenangiebd',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.listen(5000,()=>{
    console.log('Está aplicacion corre en la siguiente ruta http://localhost:5000/')
})

app.use('/',routes())


app.get('/',(req,res)=>{
    res.send('jdjnvdfv');
})