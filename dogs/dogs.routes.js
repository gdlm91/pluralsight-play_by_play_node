let _ = require('lodash');
let Dog = require('./dogs.model.js');

module.exports = function(app) {

    /** Create */
    app.post('/dogs', function(req, res) {
        let newdog = new Dog(req.body);
        newdog.save(function(err, data) {
            if(err) return res.json({info: 'error during dog create', err: err});

            res.json({info: 'dog created successfully', data: data._doc});
        })
    })


    /** Read */
    app.get('/dogs', function(req, res) {
        Dog.find(function(err, data) {
            if(err) return res.json({info: 'error during find dogs', err: err});

            res.json({info: 'dogs found', data: data});
        })
    })

    app.get('/dogs/:id', function(req, res) {
        Dog.findById(req.params.id, function(err, data) {
            if(err) return res.json({info: 'error during find the dog', err: err});

            if(!data) return res.json({info: 'dog not found'});

            res.json({info: 'dog found successfully', data: data});
        })
    })

    /** Update */
    app.put('/dogs/:id', function(req, res) {
        Dog.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if(err) return res.json({info: 'error during updating dog', err: err});

            res.json({info: 'dog updated successfully', data: req.body});
        })
    })


    /** Delete */
    app.delete('/dogs/:id', function(req, res) {
        Dog.findByIdAndRemove(req.params.id, function(err, data) {
            if(err) return res.json({info: 'error during deleting dog', err: err});

            res.json({info: 'dog deleted successfully', data: data});
        })
    })

}