const inqirer = require('inqirer');
const mysql = require('mysql');
const cTable = require('console.table');

// mvp
// create departments, roles, employees
// read departments, roles, employees
// update employee roles

//functions for data flow

//front end inquirer
//home screen with switch case for each
const home() => {
  inqirer.prompt([{
    message: "Employee Database Manager: Please select an option",
    name: "main",
    type: "list",
    choices: [
      "",
      ""
    ]
  }]).then(res => {
    switch(res.main){
      case "":
    }
  });
}
//create
//create departments
//create roles
//create employees
// back button
//read
//dep
//role
//emp
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