const tasks = require("../controllers/tasks");

module.exports = function(app) {

    const task = require('../controllers/tasks');

    app.get('/', function(req, res) {
        task.index(req, res);
    });
    app.get('/tasks', function(req, res) {
        task.viewall(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        task.find_task(req, res);
    });

    app.post('/tasks', function(req, res) {
        task.create(req, res);
    });

    app.put('/tasks/:id', function(req, res) {
        task.update(req, res);
    });

    app.delete('/tasks/:id', function(req, res) {
        task.delete(req, res);
    });


}