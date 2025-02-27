
const chalk = require('chalk');
const mongoose = require('mongoose');
const { authMechanism, professor_db } = require('../../variables/load');

const url = 'mongodb://localhost:27017/';
const options = {
  dbName: professor_db.dbName,
  user: professor_db.user,
  pass: professor_db.pass,
  authMechanism: authMechanism,
  directConnection: true,
};

const professor_connection = mongoose.createConnection(
    url,
    options,
).on('error', () => {
    console.error(`\nError connecting to ${chalk.red(professor_db.dbName)} database!`);
}).on('open', () => {
    console.log(`\nConnection to ${chalk.green(professor_db.dbName)} database succesfull as ${chalk.yellowBright('professor')}!`);
});

async function get_from_user_db() {
    const db_usr_as_prof = await professor_connection.useDb('user');
    return db_usr_as_prof;
}

module.exports = {
    professor_connection,
    get_from_user_db
};
