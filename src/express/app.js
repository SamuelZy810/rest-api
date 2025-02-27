
// Express app
const app = require('express')();

// Middleware
const body_parser_p = require('body-parser');
app.use(body_parser_p.json());
app.use(body_parser_p.raw());
app.use(body_parser_p.urlencoded({ extended: false }));

const helmet_p = require('helmet');
app.use(helmet_p());

module.exports = app;
