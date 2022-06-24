const inquirer = require("inquirer");
const fs = require("fs");

//Importing classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// importing questions
const {
  questionManager,
  questionsEngineer,
  questionIntern,
} = require("./questions");

// The temporary outputs from the enquirer functions are stored here.
let arrayStaffGlobal = [];
let teamName;

// Tool functions
const enquirerFunction = async () => {
  await inquirer.prompt(questionManager).then(async (answerOne) => {
    let isTrue = true;
    teamName = answerOne.team.toUpperCase();
    arrayStaffGlobal.push(
      new Manager(
        answerOne.name,
        answerOne.email,
        answerOne.ID,
        answerOne.officeNumber
      )
    );
    while (isTrue) {
      await inquirer
        .prompt({
          name: "staff",
          message: "Choose one of the following options:",
          type: "list",
          choices: ["Engineer", "Intern", "Finish"],
        })
        .then(async (answerTwo) => {
          if (answerTwo.staff == "Finish") {
            isTrue = false;
            return;
          } else if (answerTwo.staff == "Engineer") {
            await inquirer.prompt(questionsEngineer).then((answersTwo) => {
              arrayStaffGlobal.push(
                new Engineer(
                  answersTwo.name,
                  answersTwo.email,
                  answersTwo.ID,
                  answersTwo.github
                )
              );
            });
          } else if (answerTwo.staff == "Intern") {
            await inquirer.prompt(questionIntern).then((answersThree) => {
              arrayStaffGlobal.push(
                new Intern(
                  answersThree.name,
                  answersThree.email,
                  answersThree.ID,
                  answersThree.school
                )
              );
            });
          }
        });
    }
  });
};

//Render page
const renderManager = (arrayStaffGlobal) => {
  let stringer = ``;
  for (let i = 0; i < arrayStaffGlobal.length; i++) {
    if ("officeNumber" in arrayStaffGlobal[i]) {
      stringer += `
            <div class="card" style="width: 20rem">
            <div class="bg-dark">
              <h4 class="card-title text-center p-1 text-white">${arrayStaffGlobal[i].name}</h4>
              <h5 class="card-title text-center text-white">
                <i class="fa-solid fa-trees"></i> Manager
              </h5>
            </div>
            <div class="card-body">
              <table class="table">
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>${arrayStaffGlobal[i].id}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href="mailto:webmaster@example.com">${arrayStaffGlobal[i].email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Office Number</td>
                    <td>${arrayStaffGlobal[i].officeNumber}</td>
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
const renderEngineer = (arrayStaffGlobal) => {
  let stringer = ``;
  for (let i = 0; i < arrayStaffGlobal.length; i++) {
    if ("gitHubUserName" in arrayStaffGlobal[i]) {
      stringer += `
      <div class="card" style="width: 20rem">
      <div class="bg-primary">
        <h4 class="card-title text-center p-1 text-white">${arrayStaffGlobal[i].name}</h4>
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
              <td>${arrayStaffGlobal[i].id}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:${arrayStaffGlobal[i].email}">${arrayStaffGlobal[i].email}</a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td><a href="https://github.com/${arrayStaffGlobal[i].gitHubUserName}">${arrayStaffGlobal[i].gitHubUserName}</a></td>
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
const renderIntern = (arrayStaffGlobal) => {
  let stringer = ``;
  for (let i = 0; i < arrayStaffGlobal.length; i++) {
    if ("school" in arrayStaffGlobal[i]) {
      stringer += `
      <div class="card" style="width: 18rem">
      <div class="bg-success">
        <h4 class="card-title text-center p-1 text-white">${arrayStaffGlobal[i].name}</h4>
        <h5 class="card-title text-center text-white">
          <i class="fa-solid fa-seedling"></i> Intern
        </h5>
      </div>
      <div class="card-body">
      <table class="table">
      <tbody>
        <tr>
          <td>ID</td>
          <td>${arrayStaffGlobal[i].id}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="mailto:${arrayStaffGlobal[i].email}">${arrayStaffGlobal[i].email}</a>
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td>${arrayStaffGlobal[i].school}</td>
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
const renderHTMLTemplate = (arrayObjects, teamName) => {
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
        <div class="card-header text-center fs-1">
        ${teamName}
        </div>
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
const renderPage = async () => {
  await enquirerFunction();
  // console.log(arrayStaffGlobal[0].name);
  fs.writeFile(
    "./dist/Team.html",
    renderHTMLTemplate(arrayStaffGlobal, teamName),
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
};

renderPage();
