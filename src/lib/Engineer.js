const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, gitHubUserName) {
    super(name, email);
    this.gitHubUserName = gitHubUserName;
  }

  getGitHub() {
    return this.getGitHubUserName;
  }

  getRole() {
    return "Engineer";
  }
}
