const { register_user_model } = require('./database/database');

require('./database/database');
const logger = require('./logger/winston_logger');

async function insert_user(first_name, last_name, gender) {

    try {
        const new_user = await register_user_model.create({
            firstname: first_name,
            lastname: last_name,
            gender: gender,
            extrafield: 'Some extra string added :), jsut really random shit!',
        });
    } catch {
        console.error('Error creating user!');
    }

}

async function get_all_users() {

    logger.info('Listing all users!');

    const users = await register_user_model.find().catch(
        console.error('Couldn\'t fetch users!')
    );

    //console.log(users);

    logger.info('Users were listed!');
}

//insert_user(first_name='Jožko', last_name='Mrkvička', gender='other');
get_all_users();

async function b () {
    try {

        res = await register_user_model.findByIdAndDelete('67c0848a818f35cfe2e9f6f9');
        if (res) {
            console.log('The user has been successfuly deleted!');
        }

    } catch (e) {
        console.error('An error has occured:', e);
    }
}

