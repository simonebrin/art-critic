const sequelize = require("../config/config");
const { Comment } = require("../models/index");

async function seedComment() {
  await Comment.create({
    comment_text: "Wow, I love this! / Joe",
    art_id: 1,
    user_id: 2,
  });
  await Comment.create({
    comment_text: "My son could do better :(. / Jim",
    art_id: 2,
    user_id: 1,
  });
  await Comment.create({
    comment_text: "I wish I could buy this today! / Jake",
    art_id: 3,
    user_id: 2,
  });
  await Comment.create({
    comment_text: "Stunning! / John",
    art_id: 4,
    user_id: 1,
  });
  await Comment.create({
    comment_text: "This is my favorite. / Jordan",
    art_id: 1,
    user_id: 1,
  });
  console.log("=======comments Seeded=======");
}

module.exports = seedComment;
