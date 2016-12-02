let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello World!');
})

let cats = require('./routes/cats.js')(app);

app.listen(3000, function() {
    console.log('Server running at port 3000');
})
