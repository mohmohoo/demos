const express = require('express');
const Book = require('./../models/bookModel');
const bookController = require('./../controllers/bookController')

var bookRouter = express.Router();

bookRouter.route('/')
    .get(bookController.get)
    .post(bookController.post);

bookRouter.use('/:bookId', (request, response, next) => {
    Book.findById(request.params.bookId, (err, book) => {
        if (err) {
            response.status(500).send(err);
            return;
        }
        
        if (book)
        {
            request.book = book;
            next();
            return;
        }
        
        reponse.status(404);
    });
});

bookRouter.route('/:bookId')
    .get((request, response) => {
        response.json(books);
    })
    .put((request, response) => {
        const { title, author, genre, read } = request.body;

        Object.assign(
            request.book,
            {
                title, 
                author, 
                genre, 
                read, 
            }
        );           

        request.book.save();
        response.json(request.book);
    })
    .patch((request, response) => {
        if(req.body._id)
            delete req.body._id;

        for (const p in request.body)
        {
            request.book[p] = request.body[p];
        }

        request.book.save();
        response.json(request.book);
    })
    .delete((request, response) => {
        request.book.remove((err) => {
            if (err)
            {
                response.status(500).send(err);
                return;
            }

            response.status(204).send('Removed');
        })
    });

module.exports = bookRouter;



