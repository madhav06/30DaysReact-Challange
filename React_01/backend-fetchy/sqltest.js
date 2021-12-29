let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootmodern',
    database: 'mysql',
});

connection.connect( function(err) {
    if(err) {
        return console.error('error:' +err.message);
    }
    console.log('Connected to the MYSQL server');
});