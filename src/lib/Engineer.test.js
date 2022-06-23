const Engineer = require("./Engineer");

describe("Engineer", () => {
  describe("Constructing Objects", () => {
    it("variables should be equals to name, id and email", () => {
      const name = "eric";
      const email = "eric@gmail.com";
      const id = 1;
      const githubName = "Borat";
      const engineer = new Engineer(name, email, id, githubName);

      expect(engineer.name).toEqual(name);
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(email);
      expect(engineer.gitHubUserName).toEqual(githubName);
    });

    it("Getters should return name, id, email and role variables' values", () => {
      const name = "eric";
      const role = "Engineer";
      const id = "1";
      const email = "eric@gmail.com";
      const githubName = "Borat";
      const engineer = new Engineer(name, email, id, githubName);

      expect(engineer.getEmail()).toEqual(email);
      expect(engineer.getId()).toEqual(id);
      expect(engineer.getName()).toEqual(name);
      expect(engineer.getGitHub()).toEqual(githubName);
      expect(engineer.getRole()).toEqual(role);
    });
  });
});
