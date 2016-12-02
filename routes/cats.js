let _ = require('lodash');
let mongoose = require('mongoose');

let catSchema = mongoose.Schema({
    name: String,
    age: Number
});

let Cat = mongoose.model('Cat', catSchema);

module.exports = function(app) {

    let _cats = [];

    //Create
    app.post('/cats', function(req, res) {
        let newCat = new Cat(req.body);
        newCat.save(function(err, data) {
            if(err) return res.json({info: 'error during cat create', err: err});

            res.json({info: 'cat created successfully', data: data._doc});
        })
    })


    //Read
    app.get('/cats', function(req, res) {
        Cat.find(function(err, data) {
            if(err) return res.json({info: 'error during find cats', err: err});

            res.json({info: 'cats found', data: data});
        })
    })

    app.get('/cats/:id', function(req, res) {
        Cat.findById(req.params.id, function(err, data) {
            if(err) return res.json({info: 'error during find the cat', err: err});

            if(!data) return res.json({info: 'cat not found'});

            res.json({info: 'cat found successfully', data: data});
        })
    })

    //Update
    app.put('/cats/:id', function(req, res) {
        Cat.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if(err) return res.json({info: 'error during updating cat', err: err});

            res.json({info: 'cat updated successfully', data: req.body});
        })
    })


    //Delete
    app.delete('/cats/:id', function(req, res) {
        Cat.findByIdAndRemove(req.params.id, function(err, data) {
            if(err) return res.json({info: 'error during deleting cat', err: err});

            res.json({info: 'cat deleted successfully', data: data});
        })
    })

}