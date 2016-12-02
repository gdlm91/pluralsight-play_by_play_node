let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello Pets!');
})

let pets = require('./pets/pets.routes.js')(app);

app.listen(3000, function() {
    console.log('Pets Server running at port 3000');
})
