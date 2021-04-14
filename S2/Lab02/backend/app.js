const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');
var app = express();
const Books = require('./database/models/books');

app.use(cors());
app.use(express.json());

//SELECT / GET
app.get('/books', (req, res) =>{
    Books.find({})
    .then(book => res.send(book))
    .catch((error) => console.log(error));
});

//CREATE / POST
app.post('/books', (req, res) =>{
    (new Books(
        {'title' : req.body.title,'author' : req.body.author,'summary' : req.body.summary,'genre' : req.body.genre}
    ))
    .save()
    .then((books) => {res.send(books)})
    .catch((error) => console.log(error))
});

//UPDATE / PATCH
app.patch('/books/:bookId', (req, res) =>{
    Books.findByIdAndUpdate( {'_id' : req.params.bookId}, { $set : req.body})
    // UPDATE WHERE
    .then((book) => res.send(book))
    .catch((error) => console.log(error));
});

//DELETE / DELETE
app.delete('/books/:bookId', (req, res) => {
    Books.findByIdAndDelete(req.params.bookId)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

var PORT = 3000;

app.listen(PORT, () =>{
    console.log('NodeJS Backend exitosa en puerto #' + PORT);
});