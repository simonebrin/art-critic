const { Comment } = require("../models/index");

async function seedComment() {
 await Comment.create({
   comment_text: "Wow, I love this!",
   art_id: 1,
   user_id: 2,
 });
  await Comment.create({
    comment_text: "piece2",
    art_id: 2,
    user_id: 1,
  });
  await Comment.create({
    comment_text: "piece3",
    art_id: 3,
    user_id: 2,
  });
 await Comment.create({
   comment_text: "piece4",
   art_id: 4,
   user_id: 1,
 });
  console.log("=======comments Seeded=======");
}

module.exports = seedComment;
