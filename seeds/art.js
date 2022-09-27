const sequelize = require("../config/config");
const { Art } = require("../models/index");

async function seedArt() {
  await Art.create({
    name: "The Accountant (Marvin)",
    image:
      "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=1600&height=1450&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FDfROf8UR7HIgESsntD-xQw%2Fnormalized.jpg",
    // "https://xavierhufkens.imgix.net/artworks/NEEL-033-1971.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1976.833976834&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });

  await Art.create({
    name: "Geoffrey Hendricks and Brian",
    image:
      "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=1258&height=1600&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FRMJGjeR8zwceYI7UkTdfYA%2Fnormalized.jpg",
    // "https://xavierhufkens.imgix.net/artworks/NEEL-046-1966.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=2416.9944925256&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  await Art.create({
    name: "James Hunter Black Draftee",
    image:
      "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=1054&height=1600&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FJ_HyjoNiXJw4tmOTTRreYQ%2Fnormalized.jpg",
    // "https://xavierhufkens.imgix.net/artworks/NEEL-029-1971.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1149.90234375&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  await Art.create({
    name: "Self-portrait",
    image:
      "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=1184&height=1600&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F9DMbuayTIrY6B2fBa-MUGw%2Fnormalized.jpg",
    // "https://xavierhufkens.imgix.net/artworks/NEEL-087-1974_rf_2021-08-14-130450.jpg?auto=format&crop=focalpoint&domain=xavierhufkens.imgix.net&fit=clip&w=150&h=1725.4509018036&q=82&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1",
  });
  console.log("=======artSeeded=======");
}

module.exports = seedArt;
