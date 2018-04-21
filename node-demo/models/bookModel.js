
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookModel = schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String }, 
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookModel);