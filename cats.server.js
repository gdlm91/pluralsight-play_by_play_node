let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello Cats!');
})

let cats = require('./cats/cats.routes.js')(app);

app.listen(3001, function() {
    console.log('Cats Server running at port 3001');
})
