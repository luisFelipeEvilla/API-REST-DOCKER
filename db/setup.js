const { DB_CONFIG } = require('../config');
const pool = require('./index');
const chalk = require('chalk')

pool.query(`CREATE TABLE IF NOT EXISTS users (
        event_id VARCHAR ( 50 ) NOT NULL,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL
     );`).then(() => {
    console.log(chalk.green("Tabla de usuarios creada satisfactoriamente"));
    process.exit();
}).catch((err) => {
    console.log(chalk.red(`Error creando la tabla de usuarios \n${err}`));
    process.exit(1);
})
