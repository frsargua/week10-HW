const Employee = require("./Employee");

describe("Employee", () => {
  describe("Constructing Objects", () => {
    it("variables should be equals to name, id and email", () => {
      const name = "eric";
      const id = "1";
      const email = "eric@gmail.com";
      const employee = new Employee(name, email, id);

      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });

    it("Getters should return name, id, email and role", () => {
      const name = "eric";
      const role = "Employee";
      const id = "1";
      const email = "eric@gmail.com";
      const employee = new Employee(name, email, id);

      expect(employee.getEmail()).toEqual(email);
      expect(employee.getId()).toEqual(id);
      expect(employee.getName()).toEqual(name);
      expect(employee.getRole()).toEqual(role);
    });
  });
});
