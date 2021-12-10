const mongoose = require('mongoose');

module.export = mongoose.connect('mongodb://localhost/restful_task',{useNewUrlParser:true});

