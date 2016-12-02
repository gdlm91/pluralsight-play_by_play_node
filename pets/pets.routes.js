let request = require('request').defaults({
    json: true
});

module.exports = function(app) {

    /** Read */
    app.get('/pets', function(req, res) {

        request({uri: 'http://localhost:3002/dogs'}, function(err, response, body) {
            if(err || response.statusCode !== 200) return response.send(response.statusCode);

            res.json(body);
        })

    })

}