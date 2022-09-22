const sequelize = require("../config/config");
const { Art } = require("../models/index");

async function seedArt() {
  await Art.create({
    name: "Ed Sun",
    image:
      "https://xavierhufkens.imgix.net/artworks/NEEL-033-1971.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1976.833976834&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });

  await Art.create({
    name: "Hartley on the Motorcycle",
    image:
      "https://xavierhufkens.imgix.net/artworks/NEEL-046-1966.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=2416.9944925256&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  await Art.create({
    name: "Nancy and the Twins (5 Months)",
    image:
      "https://xavierhufkens.imgix.net/artworks/NEEL-029-1971.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1149.90234375&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  await Art.create({
    name: "Carolyn Robinson",
    image:
      "https://xavierhufkens.imgix.net/artworks/NEEL-087-1974_rf_2021-08-14-130450.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1725.4509018036&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  console.log("=======artSeeded=======");
}

module.exports = seedArt;
