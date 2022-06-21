class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = this.idGenerator;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  idGenerator() {
    return Math.floor((1 + Math.random()) * 0x10000);
  }
}

module.exports = Employee;
