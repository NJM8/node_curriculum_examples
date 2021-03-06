const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mongoose_intro',
  {
    useMongoClient: true
  }
);

mongoose.Promise = Promise;

module.exports.Instructor = require('./instructor');
module.exports.Todo = require('./todo');
