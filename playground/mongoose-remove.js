const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c5b79521817420ccb5883c6'}).then((todo) => {

});

Todo.findByIdAndRemove('5c5b79521817420ccb5883c6').then((todo) => {
  console.log(todo);
});