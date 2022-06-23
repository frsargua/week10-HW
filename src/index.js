const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require("email-validator");
const { verify } = require("crypto");

// Question array of objects for each role

let arrayStaffGlobal = [
  [
    { name: "1", ID: "2", email: "3", officeNumber: "4" },
    { name: "1", ID: "2", email: "3", github: "4" },
    { name: "1", ID: "2", email: "3", school: "4" },
    { name: "1", ID: "2", email: "3", school: "4" },
    { name: "1", ID: "2", email: "3", github: "4" },
  ],
];

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

//Render page
const renderManager = (arrayStaff) => {
  let stringer = ``;
  console.log("Outer");
  for (let i = 0; i < arrayStaff.length; i++) {
    console.log("Outsider");
    if ("officeNumber" in arrayStaff[0][i]) {
      console.log("Insider");
      stringer += `
            <div class="card" style="width: 18rem">
            <div class="bg-dark">
              <h4 class="card-title text-center p-1 text-white">${arrayStaff[0][i].name}</h4>
              <h5 class="card-title text-center text-white">
                <i class="fa-solid fa-trees"></i> Manager
              </h5>
            </div>
            <div class="card-body">
              <table class="table">
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>${arrayStaff[0][i].ID}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href="mailto:webmaster@example.com">${arrayStaff[0][i].email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Office Number</td>
                    <td>${arrayStaff[0][i].officeNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
              `;
    }
  }
  return stringer;
};
const renderEngineer = (arrayStaff) => {
  let stringer = ``;
  for (let i = 0; i < arrayStaff[0].length; i++) {
    if ("github" in arrayStaff[0][i]) {
      console.log("Insider");
      stringer += `
      <div class="card" style="width: 18rem">
      <div class="bg-primary">
        <h4 class="card-title text-center p-1 text-white">${arrayStaff[0][i].name}</h4>
        <h5 class="card-title text-center text-white">
          <i class="fa-solid fa-tree"></i>
          Engineer
        </h5>
      </div>
      <div class="card-body">
        <table class="table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>${arrayStaff[0][i].ID}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:webmaster@example.com">${arrayStaff[0][i].email}</a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td><a href="mailto:webmaster@example.com">${arrayStaff[0][i].github}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      `;
    }
  }
  return stringer;
};
const renderIntern = (arrayStaff) => {
  let stringer = ``;
  for (let i = 0; i < arrayStaff[0].length; i++) {
    if ("school" in arrayStaff[0][i]) {
      console.log("Insider");
      stringer += `
      <div class="card" style="width: 18rem">
      <div class="bg-success">
        <h4 class="card-title text-center p-1 text-white">${arrayStaff.name}</h4>
        <h5 class="card-title text-center text-white">
          <i class="fa-solid fa-seedling"></i> Intern
        </h5>
      </div>
      <div class="card-body">
      <table class="table">
      <tbody>
        <tr>
          <td>ID</td>
          <td>${arrayStaff[0][i].ID}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="mailto:webmaster@example.com">${arrayStaff[0][i].email}</a>
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td><a href="mailto:webmaster@example.com">${arrayStaff[0][i].school}</a></td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
        `;
    }
  }
  return stringer;
};
const renderHTMLTemplate = (arrayObjects) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/c6e9c752f1.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="./assets/css/styles.css" />
        <title>Team Profile</title>
      </head>
      <body>
        <!-- Header -->
        <div class="card-header text-center fs-1">Title</div>
        <!------------ Cards ------------>
        <!-- Managers -->
        <p>
          <button
            class="btn btn-dark col-12"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseManagers"
            aria-expanded="false"
            aria-controls="collapseManagers"
          >
            Show managers
          </button>
        </p>
        <div class="collapse" id="collapseManagers">
          <div class="d-flex justify-content-evenly p-5">
          ${renderManager(arrayObjects)}
          </div>
        </div>
        <!-- Engineers -->
        <p>
          <button
            class="btn btn-primary col-12"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEngineers"
            aria-expanded="false"
            aria-controls="collapseEngineers"
          >
            Show Engineers
          </button>
        </p>
        <div class="collapse" id="collapseEngineers">
          <div class="d-flex justify-content-evenly p-5">
          ${renderEngineer(arrayObjects)}
          </div>
        </div>
        <!-- Interns -->
        <p>
          <button
            class="btn btn-primary col-12 bg-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInterns"
            aria-expanded="false"
            aria-controls="collapseInterns"
          >
            Show Interns
          </button>
        </p>
        <div class="collapse" id="collapseInterns">
          <div class="d-flex justify-content-evenly p-5">
          ${renderIntern(arrayObjects)}
        </div>
        </div>
    
        <!-- JavaScript Bundle with Popper -->
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
        <script src="../src/index.js"></script>
      </body>
    </html>
    `;
};
//Functions to run to create page
// enquirerFunction();

console.log(renderHTMLTemplate(arrayStaffGlobal));
