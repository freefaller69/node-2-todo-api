// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a28a0c720c403a6ee2a7e40')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a288941b4418e25dc2ef81c')
    },
      {
        $set: {
          name: 'Stewart'
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
    });

  // db.close();
});
