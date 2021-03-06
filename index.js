const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const figlet = require('figlet');
const Choice = require('inquirer/lib/objects/choice');

// All this code does is make a pretty header.
figlet('Employee-Manager', function (err, data) {
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
// read departments, roles,
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

con.connect(function (err) {
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
      "Create New Employee",
      "Exit"
    ]
  }]).then(res => {
    switch (res.main) {
      case "View All Employees":
        readAll();
        break;
      case "Create New Employee":
        createEmp();
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
//create employe
function createEmp() {
  con.query("SELECT title FROM role", function (err, res) {
    if (err) throw err;
    let choices = [];
    res.forEach(obj => choices.push(obj.title));
    inquirer.prompt([{
        message: "What is the employee's First Name?",
        name: "first_name"
      },
      {
        message: "What is the employee's Last Name?",
        name: "last_name"
      },
      {
        message: "What is the employee's role?",
        type: "list",
        name: "role",
        choices: choices
      }
    ]).then(ans => {
      console.log("Creating New Employee...\n");
      var title = ans.role;
      console.log(title);
      con.query("SELECT role.id FROM role WHERE title = ?", [title], function (err, res2) {
        if (err) throw err;

        con.query("INSERT INTO employee SET ?", {
          first_name: ans.first_name,
          last_name: ans.last_name,
          role_id: res2[0].id
        },
        function (err, result3) {
          if (err) throw err;
          console.log(result3.affectedRows + " Employee Added!\n");
          home();
        });
      });
    })

  });
}
//dep
//role
//emp
function readAll() {
  con.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(m.first_name,' ',m.last_name) AS manager_name FROM employee LEFT JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.department_id = department.id)LEFT JOIN employee m ON (m.id = employee.manager_id);", function (err, res) {
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