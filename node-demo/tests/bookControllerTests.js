const should = require('should');
const sinon = require('sinon');

describe('Book controller tests', () => {
    describe('Post', () => {
        it('should not allow an empty title on post', () => {
            const Book = (book) => {
                this.save = () => {};
            };

            let req = {
                body: {
                    author: 'Jon',
                }
            }

            let res = {
                status:  sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require('../controllers/bookController');
            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]}`);
            res.send.calledWith(`Title is required`).should.equal(true);
        })
    });
});

