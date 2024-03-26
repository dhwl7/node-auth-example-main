const { Pool } = require('pg');

// Database configuration
const pgConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'DVDrental',
    password: '7878',
    port: 5432,
};

async function connectToPostgreSQL() {
    const pool = new Pool(pgConfig);

    try {
        // Connect to the PostgreSQL database
        const client = await pool.connect();
        console.log('Connected to PostgreSQL');
        // Now you can perform operations on the PostgreSQL database
    } catch (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } finally {
        // Ensure to release the client when done
        await pool.end();
    }
}

// Call the function to connect
connectToPostgreSQL();
