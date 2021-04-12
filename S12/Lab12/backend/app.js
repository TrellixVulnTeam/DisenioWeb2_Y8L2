const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');
var app = express();
const Tareas = require('./database/models/tareas');

app.use(cors());
app.use(express.json());

app.get('/tareas', (req, res) =>{
    Tareas.find({})
    .then(tarea => res.send(tarea))
    .catch((error) => console.log(error));
});

app.post('/tareas', (req, res) =>{
    (new Tareas
        (
            {
                'tarea' : req.body.tarea,
                'concluida' : req.body.concluida,
                'responsable' : req.body.responsable
            }
    ))
    .save()
    .then((tareas) => {res.send(tareas)})
    .catch((error) => console.log(error))
});

app.patch('/tareas/:tareaId', (req, res) =>{
    Tareas.findByIdAndUpdate( {'_id' : req.params.tareaId}, { $set : req.body})
    .then((tarea) => res.send(tarea))
    .catch((error) => console.log(error));
});

app.delete('/tareas/:tareaId', (req, res) => {
    Tareas.findByIdAndDelete(req.params.tareaId)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

var PORT = 3000;

app.listen(PORT, () =>{
    console.log('Connectada' + PORT);
});