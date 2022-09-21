const { User } = require("../models/index");

async function seedUser() {
  await User.create({
    name: "Simone",
    email: "simone@simone.com",
    password: "password1",
  });
  await User.create({
    name: "Emily",
    email: "emily@emily.com",
    password: "password2",
  });
  await User.create({
    name: "Aaron",
    email: "aaron@aaron.com",
    password: "password3",
  });
  await User.create({
    name: "Jarret",
    email: "jarret@jarret.com",
    password: "password4",
  });
  console.log("=======user Seeded=======");
}

module.exports = seedUser;
