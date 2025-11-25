import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'sudo_steven',
    password: 'Task@201924191009',
    database: 'liberta-dores'

});

export default pool;