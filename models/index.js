//pull in each model file
const User = require("./User");
const Eval = require("./Eval");
const Comment = require("./Comment");
const Art = require("./Art");

//making model associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Eval.belongsTo(Art, {
  foreignKey: "art_id",
});

Art.hasMany(Eval, {
    foreignKey: 'art_id'
});

User.hasMany(Eval, {
  foreignKey: "user_id",
});

Eval.hasMany(User, {
  foreignKey: "user_id",
});

Art.hasMany(Comment, {
  foreignKey: "art_id",
});

Comment.belongsTo(Art, {
  foreignKey: "art_id",
});


//export models
module.exports = {
  User,
  Eval,
  Comment,
  Art,
};
