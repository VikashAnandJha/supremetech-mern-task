const mysql = require('mysql2');
require('dotenv').config()
// Create a MySQL connection 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});



// Define the User model
class User {
  constructor(id, name, username, password, join_date, department) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.join_date = join_date;
    this.department = department;
  }


  static createUser(user, callback) {
    const { name, username, password, join_date, department } = user;

    connection.query(
      'INSERT INTO users (name, username, password, join_date, department) VALUES (?, ?, ?, ?, ?)',
      [name, username, password, join_date, department],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }

        // Retrieve the inserted user ID
        const userId = results.insertId;

        // Create a new User instance with the generated ID
        const newUser = new User(userId, name, username, password, join_date, department);

        callback(null, newUser);
      }
    );
  }

  // Method to login
  static loginUser(username, password, callback) {
    connection.query('SELECT * FROM users WHERE username = ? and password=?', [username, password], (error, results) => {
      if (error) {
        console.error(error)
        return callback(error, null);
      }

      if (results.length === 0) {
        return callback(null, null); // User not found
      }


      const user = results[0];

      // Create a User instance with the retrieved data
      const foundUser = new User(user.id, user.name, user.username, user.password, user.join_date, user.department);

      callback(null, foundUser);
    });
  }


  static getUsers(filters, callback) {
    const { date, sorting, department } = filters;

    // Building the sql query
    let query = 'SELECT * FROM users WHERE 1';
    const values = [];

    if (date) {
      query += ' AND join_date = ?';
      values.push(date);
    }

    if (department) {
      query += ' AND department = ?';
      values.push(department);
    }



    // Add sorting
    if (sorting) {
      query += ` ORDER BY ${sorting}`;
    }

    connection.query(query, values, (error, results) => {
      if (error) {
        return callback(error, null);
      }


      const users = results.map(user => new User(user.id, user.name, user.username, user.password, user.join_date, user.department));

      callback(null, users);
    });
  }
  static findByUsername(username, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const values = [username];

    connection.query(query, values, (error, results) => {
      if (error) {
        return callback(error, null)
      }

      if (results.length === 0) {
        return callback(null, null)
      }

      const user = results[0];
      const foundUser = new User(user.id, user.name, user.username, user.password, user.join_date, user.department);

      return callback(null, foundUser)
    });
  }

}

module.exports = User;
