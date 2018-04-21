const should = require('should');
const request = require('supertest');
const app = ('../app.js');
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book crud test', () => {
    it('Should allow a book to be posted and return a read and _id', (done) => {
        const bookPost = { title: 'new book', author: 'Jon', genre: 'Fiction' };

        agent.post('api/books')
            .send(bookPost)
            .expect(200)
            .end((err, results) => results.body.reads.should.equal(false));
    });
});