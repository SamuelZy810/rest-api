
const chalk = require('chalk');
const mongoose = require('mongoose');
const { authMechanism, register_db } = require('../../variables/load');

const url = 'mongodb://localhost:27017/';
const options = {
  dbName: register_db.dbName,
  user: register_db.user,
  pass: register_db.pass,
  authMechanism: authMechanism,
  directConnection: true,
};

const register_connection = mongoose.createConnection(
    url,
    options,
).on('error', () => {
    console.error(`\nError connecting to ${chalk.red(register_db.dbName)} database!`);
}).on('open', () => {
    console.log(`\nConnection to ${chalk.green(register_db.dbName)} database succesfull as ${chalk.magentaBright('register')}!`);
});

module.exports = register_connection;
