const emailValidator = require("email-validator");

//validate functions
const stringLength = (input) => {
  if (input.length < 3) {
    return "String must be between 3 and 10 characters";
  }
  return true;
};

const isNumber = (input) => {
  if (isNaN(input)) {
    return "Input is not a number";
  }
  return true;
};
// Array of objects containing the questions for enquirer
const questionManager = [
  {
    name: "team",
    message: "Please enter the name of your Team:",
    type: "text",
    validate: (answer) => stringLength(answer),
  },
  {
    name: "name",
    message: "Please enter manager's name:",
    type: "input",
    default: "Rachel",
    validate: (answer) => stringLength(answer),
  },
  {
    name: "ID",
    message: "Please enter manager's ID:",
    type: "input",
    default: "1",
    validate: (answer) => isNumber(answer),
  },
  {
    name: "email",
    message: "Please enter manager's email:",
    type: "input",
    validate: emailValidator.validate,
    default: "dummyEmail@gmail.com",
  },
  {
    name: "officeNumber",
    message: "Please enter manager's office number:",
    type: "input",
    default: "1",
    validate: (answer) => isNumber(answer),
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
      validate: (answer) => stringLength(answer),
    },
    {
      name: "ID",
      message: `Please enter ${role}'s ID:`,
      type: "input",
      default: "2",
      validate: (answer) => isNumber(answer),
    },
    {
      name: "email",
      message: `Please enter ${role}'s email:`,
      type: "input",
      validate: emailValidator.validate,
      default: "dummyEmail@gmail.com",
    },
    {
      name: `${extraVariable}`,
      message: `Please enter ${role}'s ${extraVariable}:`,
      type: "input",
      default: "4",
      validate: (answer) => stringLength(answer),
    },
  ];
  return arrayObjects;
}

module.exports = {
  questionManager,
  questionsEngineer,
  questionIntern,
};
