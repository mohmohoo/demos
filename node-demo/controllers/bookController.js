const Book = require('./../models/bookModel');

const get = (request, response) => {
    var query = {};
    
    if (request.query.genre)
    {
        query.genre = request.query.genre;
    }

    Book.find(query, (err, books) => {
        if (err)
            response.status(500).send(err);
        else
            response.json(books);
    });
};

const post = (request, response) => {

    var book = new Book(request.body);
    
    if (!request.body.title)
    {
        response.status(400);
        reponse.send('Title is required');
        return;
    }

    book.save((err, obj) => {
        if (!err)
        {
            response.status(201);
            response.send(book); 
            return;
        }
        
        response.status(500).send(err);
    });
};

module.exports = {
    get: get,
    post: post
};
