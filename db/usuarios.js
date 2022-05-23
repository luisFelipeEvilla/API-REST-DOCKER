const pool = require('./index');
const chalk = require('chalk');

const createUser = async (eventId, userName, userPassword) => {
    const query =  'INSERT INTO users VALUES($1, $2, $3)';
    const params = [eventId, userName, userPassword];

    try {
        const result = await pool.query(query, params)
        console.log(chalk.green("usuario creado satisfactoriamente"));
        
        return true
    } catch (error) {
        console.error(chalk.red(`Error creando el usuario \n${error}`));
        
        return false;
    }
}

const getUsers = async () => {
    const query =  'SELECT * FROM users';

    try {
        const result = await pool.query(query, params)
        
        return result;
    } catch (error) {
        console.error(chalk.red(`Error creando el usuario ${error}`));
        
        return false;
    }
}
const getUser = async (eventId, userName, userPassword) => {
    const query =  'SELECT * FROM users WHERE event_id = $1 AND username = $2 AND password = $3';
    const params = [eventId, userName, userPassword];

    try {
        const result = await pool.query(query, params)
        
        const found = result.rowCount ? result.rows[0] : false; 

        return found;
    } catch (error) {
        console.error(chalk.red(`Error creando el usuario ${error}`));
        
        return false;
    }
}

const deleteUsers = async () => {
    const query =  'DELETE FROM users';

    try {
        const result = await pool.query(query)
        
        return true
    } catch (error) {
        console.error(chalk.red(`Error eliminando los usuarios \n${error}`));
        
        return false;
    }
}

module.exports = {
    getUser,
    createUser,
    deleteUsers
}