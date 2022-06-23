const Manager = require("./Manager");

describe("manager", () => {
  describe("Constructing Objects", () => {
    it("variables should be equals to name, id and email", () => {
      const name = "eric";
      const email = "eric@gmail.com";
      const id = 1;
      const officeNumber = "256";
      const manager = new Manager(name, email, id, officeNumber);

      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.officeNumber).toEqual(officeNumber);
    });

    it("Getters should return name, id, email and role variables' values", () => {
      const name = "eric";
      const role = "Manager";
      const id = "1";
      const email = "eric@gmail.com";
      const officeNumber = "256";
      const manager = new Manager(name, email, id, officeNumber);

      expect(manager.getEmail()).toEqual(email);
      expect(manager.getId()).toEqual(id);
      expect(manager.getName()).toEqual(name);
      expect(manager.getRole()).toEqual(role);
    });
  });
});
