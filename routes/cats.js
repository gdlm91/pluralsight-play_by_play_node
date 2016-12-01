let _ = require('lodash');

module.exports = function(app) {

    let _cats = [];

    //Create
    app.post('/cats', function(req, res) {
        _cats.push(req.body);
        res.json(req.body);
    })


    //Read
    app.get('/cats', function(req, res) {
        res.json(_cats);
    })

    app.get('/cats/:name', function(req, res) {
        res.json(_.find(_cats, {name: req.params.name}));
    })

    //Update
    app.put('/cats/:name', function(req, res) {
        let catIndex = _.findIndex(_cats, {name: req.params.name});
        _.merge(_cats[catIndex], req.body);
        res.json(_cats[catIndex]);
    })


    //Delete
    app.delete('/cats/:name', function(req, res) {
        let deletedCat;
        _cats = _.filter(_cats, function(cat) {
            if(cat.name === req.params.name) {
                deletedCat = cat;
                return false;
            }
            return true;
        })
        res.json(deletedCat);
    })

}