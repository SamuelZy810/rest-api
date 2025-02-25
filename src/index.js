
// Express app
const exp_module = require('express');
let app = exp_module();

// Middleware
const bdparser = require('body-parser');

// Using middleware
app.use(bdparser.json())
app.use(bdparser.urlencoded({ extended: false }))

// Mongo
const user_sch = require('./db_user_scema');
const conn = require('./db_connection');


app.get('/info', async (req, res) => {

    const result = await user_sch.find({name: req.body.name});

    const value = result.map(user => {user.lastname, user.name})

    res.json(value);

});

app.post('/submit', async (req, res) => {

    await user_sch.create({
        name: req.body.name,
        lastname: req.body.lastname
    });

    res.sendStatus(200);

});

app.listen(8080, () => {
    console.log("Server is running!");
});
