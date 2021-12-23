const mysql = require ('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jorge_coello'
})     
conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...')
}); 
module.exports = conn; 

