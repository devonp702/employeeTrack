const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const figlet = require('figlet');

// All this code does is make a pretty header.
figlet('Employee-Manager', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log("\n============================")
    console.log(data)
    console.log("\nAll in one management system. \nTo start, Press the up or down arrow. \n============================")
});
// mvp
// create departments, roles, employees
// read departments, roles, employees
// update employee roles

//connect to database
var con = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + con.threadId + "\n");
});

//functions for data flow

//front end inquirer
//home screen with switch case for each
const home = () => {
  inquirer.prompt([{
    message: "Employee Database Manager: Please select an option",
    name: "main",
    type: "list",
    choices: [
      "View All Employees",
      "Exit"
    ]
  }]).then(res => {
    switch(res.main){
      case "View All Employees":
        readAll();
        break;
      default:
        con.end();
        console.clear();
    }
  });
}
home();
//create
//create departments
//create roles
//create employees
// back button
//read
//dep
//role
//emp
function readAll() {
  con.query("SELECT first_name, last_name FROM employee", function (err, res){
    if (err) throw err;
    console.table(res);
    home();
  });
}

//back
//update emplyee role
// click emp, what is new role choice?

//back end sql & js
// get table data
//department view
//get table department
//role view
//get table role join department
//employee view
//get table employees, join department and role
// post new with teplate literals
//department
//name
// role
// name
// salery 
// link to department
// employee
//fname
//lname
//link to role
// update eployee
//filter out employee by id