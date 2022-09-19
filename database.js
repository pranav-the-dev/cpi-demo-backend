const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'cpiDemo',
    password: 'cpiDemo',
    database: 'cpiDemo',
});

databaseConnection.connect((error) => {
    if (!error)
        console.log('Database connected successfully');
    else
        console.log('Database connection failed' + JSON.stringify(error, undefined, 2));
});

module.exports = databaseConnection;