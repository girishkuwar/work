var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : ""
});
con.connect (function (err) {
    if (err) throw err;
    console.log('connected');
    con.query("CREATE DATABASE demotest123", function (err,result) {
        if (err) throw err;
        console.log ('Databse connected');

    });
});