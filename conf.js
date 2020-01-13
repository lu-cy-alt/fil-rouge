const mysql = require('mysql');

// Setup database connection
const connection = mysql.createConnection({
  host: 'localhost', // db server address
  user: 'root', // db user's name
  password: 'LecatEver,31', // db user's password
  database: 'Shazoom', // db name
});

module.exports = connection;