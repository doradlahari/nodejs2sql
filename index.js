const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'myFirstLocalHost',
    user: 'root',
    password: 'Hari@sql1998',
    database: 'project management system'
});
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
});
connection.query('SELECT * FROM your_table', (error, results) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});
connection.end((error) => {
    if (error) {
        console.error('Error closing the database connection:', error);
        return;
    }
    console.log('Connection closed');
});
