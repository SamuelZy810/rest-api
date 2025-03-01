
const path = require('path');

const { config } = require('dotenv');
config( { path: path.resolve(__dirname, '../../private/env/.env') } );

module.exports = {
    authMechanism: process.env.AUTH_MECHANISM,
    register_db: {
        dbName: process.env.REG_DATABASE,
        user:   process.env.REG_USER,
        pass:   process.env.REG_PASS,
    },
    user_db: {
        dbName: process.env.USR_DATABASE,
        user:   process.env.USR_USER,
        pass:   process.env.USR_PASS,
    },
    professor_db: {
        dbName: process.env.PROF_DATABASE,
        user:   process.env.PROF_USER,
        pass:   process.env.PROF_PASS,
    }
}
