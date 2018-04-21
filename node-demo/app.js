const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

let db;

if (process.env.ENV == 'Test')
{
    db = mongoose.connect('mongodb://localhost/bookAPI_test');
}
else 
{
    db = mongoose.connect('mongodb://localhost/bookAPI');
} 

const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bookRouter = require('./Routes/bookRoutes');

app.use('/api/books', bookRouter);

app.get('/', (request, response) => {
    response.send('welcome');
});

app.listen(port, () => console.log(`app running at ${port}`));