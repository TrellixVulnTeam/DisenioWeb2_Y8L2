const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId : {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true,
        maxlength: 120
    },
    genre: {
        type: String,
        required: true
    } 
});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;