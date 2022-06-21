const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require("email-validator");

// Question array of objects for each role
const questionManager = [
  {
    name: "name",
    message: "Please enter manager's name:",
    type: "input",
  },
  {
    name: "ID",
    message: "Please enter manager's ID:",
    type: "input",
  },
  {
    name: "email",
    message: "Please enter manager's email:",
    type: "input",
  },
  {
    name: "officeNumber",
    message: "Please enter manager's office number:",
    type: "input",
  },
  {
    name: "staff",
    message: "Choose one of the following options:",
    type: "list",
    choices: ["Engineer", "Intern, Finish"],
  },
];
const questionsEngineer = createQuestions("Engineer", "github");
const questionIntern = createQuestions("intern", "school");

// This function creates the array of objects for Engineer and Intern
function createQuestions(role, extraVariable) {
  const arrayObjects = [
    {
      name: "name",
      message: `"Please enter ${role}'s name:`,
      type: "input",
    },
    {
      name: "ID",
      message: `Please enter ${role}'s ID:`,
      type: "input",
    },
    {
      name: "email",
      message: `Please enter ${role}'s email:`,
      type: "input",
    },
    {
      name: `${extraVariable}`,
      message: `Please enter ${role}'s ${extraVariable}:`,
      type: "input",
    },
  ];
  return arrayObjects;
}
