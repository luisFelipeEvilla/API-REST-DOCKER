const pgtools = require('pgtools')
const { DB_CONFIG } = require('../config');
const pool = require('./index');
const chalk = require('chalk')

pgtools.createdb(DB_CONFIG, DB_CONFIG.dbName, (err, res) => {
    if (err) {
        console.error(chalk.red(`Error creando la base de datos \n${err}`));
        process.exit(1);
    }

    console.log(chalk.green(`Base de datos ${DB_CONFIG.dbName} creada exitosamente`));

    pool.query(`CREATE TABLE IF NOT EXISTS users (
        event_id INTEGER PRIMARY KEY,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL
     );`).then(() => {
        console.log(chalk.green("Tabla de usuarios creada satisfactoriamente"));
        process.exit();
    }).catch((err) => {
        console.log(chalk.red(`Error creando la tabla de usuarios \n${err}`));
        process.exit(1);
    })
})