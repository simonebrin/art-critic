const seedArt = require("./art");
const seedUser = require("./user");
const seedComment = require("./comment");
const connection = require("../config/config");

const seedAll = async () => {
  await connection.sync({ force: true });
  await seedArt();
  await seedUser();
  await seedComment();
  process.exit(0);
};

seedAll();
