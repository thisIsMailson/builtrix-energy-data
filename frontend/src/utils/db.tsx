const { Client } = require('pg');

const pool = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});
pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })

export default pool;
