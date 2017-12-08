const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var todoid = '5a2a120489a9d775b0e356c3';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(todoid).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userid = '5a29daf937a7124b949e02eb';

User.findById(userid).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User By ID', user);
}).catch((e) => console.log(e));
