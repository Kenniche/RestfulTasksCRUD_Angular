require("../models/task");


const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

    index: function(req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                res.json({ message: "error", error: err })
            }
            else {
                res.json({ message: 'Success!', data: tasks })
            }
        })
    },
    viewall: function(req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                res.json({ message: "error", error: err })
            }
            else {
                res.json({ message: 'Success! All tasks!', data: tasks })
            }
        })
    },

    find_task: function(req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json({ message: 'error', data: err })
            } else {
                console.log(task)
                res.json({ message: 'Success! Task by ID!', data: task })
            }
        })
    },
    create: function(req, res) {
        var task = new Task({
            title: req.body.title,
            description: req.body.description,
        })
        task.save(function (err, tasks) {
            if (err) {
                res.json({ message: 'error', error: err })
            } else {
                res.json({ message: 'Success! Created a Task!', data: tasks })
            }
        })
    },
    update: function(req, res) {
        Task.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                description: req.body.description, 
                completed: req.body.completed
            }
        }, function (err, tasks) {
            if (err) {
                res.json({ message: 'error' })
            } else {
                res.json({ message: 'Success! Update a Task by ID', data: tasks })
            }
        })
    },
    delete: function(req, res) {
        Task.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('Returned Error:', err);
                res.json({ message: 'error' })
            }
            else {
                res.json({ message: "Success" })
            }
        })
    }
}

