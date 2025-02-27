
const chalk = require('chalk');
const mongoose = require('mongoose');
const { authMechanism, user_db } = require('../../variables/load');

const url = 'mongodb://localhost:27017/';
const options = {
  dbName: user_db.dbName,
  user: user_db.user,
  pass: user_db.pass,
  authMechanism: authMechanism,
  directConnection: true,
};

const user_connection = mongoose.createConnection(
    url,
    options,
).on('error', () => {
    console.error(`\nError connecting to ${chalk.red(user_db.dbName)} database!`);
}).on('open', () => {
    console.log(`\nConnection to ${chalk.green(user_db.dbName)} database succesfull as ${chalk.blueBright('student')}!`);
});

async function get_from_user_db() {
    const db_usr_as_user = await user_connection.useDb('user');
    return db_usr_as_user;
}

module.exports = {
    user_connection,
    get_from_user_db
};
