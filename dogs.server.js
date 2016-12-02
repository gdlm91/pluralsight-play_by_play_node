let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello Dogs!');
})

let dogs = require('./dogs/dogs.routes.js')(app);

app.listen(3002, function() {
    console.log('Dogs Server running at port 3002');
})
