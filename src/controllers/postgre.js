
const sequelize = require('sequelize');
const Customer = require('../models/user1');



exports.userSave = async (req, res) => {
  try {
    const saveObj = {
      name: "Jio",
      age: 9,
      team: 1 // Ensure that team is a string
    };

    // Create a new user record
    const saveUser = await Customer.create(saveObj);

    res.status(200).json({ message: 'Save user', saveUser: saveUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error saving user' });
  }
}






// const Pool = require('pg').Pool

// const pool  =  new Pool ({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'DVDrental',
//     password: '7878',
//     port: 5432,
// });


// exports.hello1 = async (req, res) => {
//     try {
//       console.log('hi');
//       res.json({ message: 'Hi Node' });
//     } catch (error) {
//       console.log('erroe =>', error);
//       res.status(400).json({ error: error });
//     }
  
//   };

// exports.getUsers = async (req, res) => {
//     pool.query('SELECT first_name, last_name, email FROM customer; ', (error, results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// }

