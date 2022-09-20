const { User } = require("../models/index");

function seedUser() {
  User.create({
    name: "Simone",
    email: "simone@simone.com",
    password: "password1",
  });
  User.create({
    name: "Emily",
    email: "emily@emily.com",
    password: "password2",
  });
  User.create({
    name: "Aaron",
    email: "aaron@aaron.com",
    password: "password3",
  });
  User.create({
    name: "Jarret",
    email: "jarret@jarret.com",
    password: "password4",
  });
  console.log("=======user Seeded=======");
}

module.exports = seedUser;
