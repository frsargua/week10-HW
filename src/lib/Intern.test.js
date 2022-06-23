const Intern = require("./Intern");

describe("Intern", () => {
  describe("Constructing Objects", () => {
    it("variables should be equals to name, id and email", () => {
      const name = "eric";
      const email = "eric@gmail.com";
      const id = 1;
      const school = "UoB";
      const intern = new Intern(name, email, id, school);

      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(school);
    });

    it("Getters should return name, id, email and role variables' values", () => {
      const name = "eric";
      const role = "Intern";
      const id = "1";
      const email = "eric@gmail.com";
      const school = "UoB";
      const intern = new Intern(name, email, id, school);

      expect(intern.getEmail()).toEqual(email);
      expect(intern.getId()).toEqual(id);
      expect(intern.getName()).toEqual(name);
      expect(intern.getSchool()).toEqual(school);
      expect(intern.getRole()).toEqual(role);
    });
  });
});
