// const { Pool } = require('pg');

// // Database configuration
// const pgConfig = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'sampleDatabase',
//     password: '7878',
//     port: 5432,
// };


// async function connectToPostgreSQL() {
//     const pool = new Pool(pgConfig);

//     try {
//         // Connect to the PostgreSQL database
//         const client = await pool.connect();
//         console.log('Connected to PostgreSQL');
//         // Now you can perform operations on the PostgreSQL database
//     } catch (err) {
//         console.error('Error connecting to PostgreSQL:', err);
//     } finally {
//         // Ensure to release the client when done
//         await pool.end();
//     }
// }

// // Call the function to connect
// connectToPostgreSQL();



const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sampleDatabase', 'postgres', '7878', {
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'postgres',
  logging: false, //do not show log 
});



try {
  sequelize.authenticate();
  console.log('PostgreSQL Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

sequelize.sync({ force : false });
module.exports = sequelize;