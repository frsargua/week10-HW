const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require("email-validator");
const { verify } = require("crypto");

// Question array of objects for each role

let arrayStaffGlobal = [];

const questionManager = [
  {
    name: "name",
    message: "Please enter manager's name:",
    type: "input",
    default: "1",
  },
  {
    name: "ID",
    message: "Please enter manager's ID:",
    type: "input",
    default: "2",
  },
  {
    name: "email",
    message: "Please enter manager's email:",
    type: "input",
    default: "3",
  },
  {
    name: "officeNumber",
    message: "Please enter manager's office number:",
    type: "input",
    default: "4",
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
      default: "1",
    },
    {
      name: "ID",
      message: `Please enter ${role}'s ID:`,
      type: "input",
      default: "2",
    },
    {
      name: "email",
      message: `Please enter ${role}'s email:`,
      type: "input",
      default: "3",
    },
    {
      name: `${extraVariable}`,
      message: `Please enter ${role}'s ${extraVariable}:`,
      type: "input",
      default: "4",
    },
  ];
  return arrayObjects;
}

// Tool functions
const enquirerFunction = () => {
  inquirer.prompt(questionManager).then(async (answerOne) => {
    console.log("First path");
    let isTrue = true;
    let arrayStaff = [];
    arrayStaff.push(answerOne);

    while (isTrue) {
      await inquirer
        .prompt({
          name: "staff",
          message: "Choose one of the following options:",
          type: "list",
          choices: ["Engineer", "Intern", "Finish"],
        })
        .then(async (answerTwo) => {
          console.log("Second path");
          if (answerTwo.staff == "Finish") {
            console.log("completed!");
            isTrue = false;
            return;
          } else if (answerTwo.staff == "Engineer") {
            await inquirer.prompt(questionsEngineer).then((answers2) => {
              arrayStaff.push(answers2);
            });
          } else if (answerTwo.staff == "Intern") {
            await inquirer.prompt(questionIntern).then((answers2) => {
              arrayStaff.push(answers2);
            });
          }
        });
    }
    arrayStaffGlobal.push(arrayStaff);
    console.log(arrayStaffGlobal);
  });
};

//Functions to run to create page
enquirerFunction();
