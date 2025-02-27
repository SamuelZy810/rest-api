
const { default: mongoose } = require('mongoose');

// Database connections
const user_connection = require('./users/db_users');
const prof_connection = require('./users/db_professor');
const reg_connection = require('./users/db_register');

// Database schemas
/// User schema
const user_schema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    }
}, { strict: false });

/// Page schema
const page_schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'sections' }]
}, { strict: false });

/// Section schema
const sect_schema = new mongoose.Schema({
    title: { type: String, required: true },
    paragraphs: [{ type: String, required: true }]
}, { strict: false });

// Database models
const register_user_model = reg_connection.model('users', user_schema);

const user_content_page = user_connection.user_connection.model('pages', page_schema);

const user_content_section = user_connection.user_connection.model('sections', sect_schema);

const professor_conten_page = prof_connection.professor_connection.model('pages', page_schema);

const professor_conten_section = prof_connection.professor_connection.model('sections', sect_schema);

module.exports = {
    models: {
        register_user_model,
        user_content_page,
        user_content_section,
        professor_conten_page,
        professor_conten_section,
    },
    connections: {
        user_connection,
        prof_connection,
        reg_connection,
    },
    schemas: {
        user_schema,
        page_schema,
        sect_schema,
    }
}
