const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // Todo.remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((todo) => {
//
// });

Todo.findByIdAndRemove('5a2b14f6bb54274abce0b6c0').then((todo) => {
  console.log(todo);
});
