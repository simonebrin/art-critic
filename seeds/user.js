const sequelize = require("../config/config");
const { User } = require("../models/index");

async function seedUser() {
  await User.create({
    username: "Simone",
    email: "simone@simone.com",
    password: "password1",
  });
  await User.create({
    username: "Emily",
    email: "emily@emily.com",
    password: "password2",
  });
  await User.create({
    username: "Aaron",
    email: "aaron@aaron.com",
    password: "password3",
  });
  await User.create({
    username: "Jarret",
    email: "jarret@jarret.com",
    password: "password4",
  });
  console.log("=======user Seeded=======");
}

module.exports = seedUser;
