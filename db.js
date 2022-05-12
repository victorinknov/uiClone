const MYSQL = require('mysql');

let pool = MYSQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'c10h15nbb@',
  database: 'uiClone'
})

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

pool.query('CREATE DATABASE uiClone', (err, result)=>{
    if(err) throw err;
    console.warn('CREATED')
})
