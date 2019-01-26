const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Amir'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  db.collection('Users').deleteOne({_id: 123}).then((result) => {
    console.log(result);
  });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});