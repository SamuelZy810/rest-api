
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/';
const options = {
  dbName: 'test',
  user: 'samuel',
  pass: 'Samuel11255',
  authMechanism: 'SCRAM-SHA-256',
  directConnection: true
};

const connection = mongoose.createConnection(
    url,
    options,
).on('error', () => {
    console.error('Error connecting to database!');
}).on('open', () => {
    console.log('Connection to database succesfull!');
});

module.exports = connection;
