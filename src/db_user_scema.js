
// Mongo DB package
const mongoose = require('mongoose');

// Mongo connection
const conn = require('./db_connection');

const user_scnema = new mongoose.Schema({
    name: String,
    lastname: String,
});

const my_model = conn.model('users', user_scnema);

module.exports = my_model;
