const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'MiloHealth!123',
database: 'milo',
multipleStatements: true
});

mysqlConnection.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3306
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/prescription' , (req, res) => {
mysqlConnection.query('SELECT * FROM prescriptions', (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );

//Router to GET specific learner detail from the MySQL database
app.get('/prescription/:id' , (req, res) => {
mysqlConnection.query('SELECT * FROM learnerdetails WHERE user_id = ?',[req.params.id], (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );

//Router to INSERT/POST a learner's detail
app.post('/prescription', (req, res) => {
let milo = req.body;
var sql = "SET @user_id = ?;SET @drug_name = ?;SET @presc_dosage = ?;SET @rem_dosage = ?;
CALL prescriptionAddOrEdit(@user_id,@drug_name,@presc_dosage,@rem_dosage);";
mysqlConnection.query(sql, [milo.user_id, milo.drug_name, milo.presc_dosage, milo.rem_dosage], (err, rows, fields) => {
if (!err)
rows.forEach(element => {
if(element.constructor == Array)
res.send('New User ID : '+ element[0].user_id);
});
else
console.log(err);
})
});
