const User = require('./User');
const Eval = require('./Eval');
const Comment = require('./Comment');
const User = require('./User');
const Art = require('./art');

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Eval.belongsTo(Art, {
    foreignKey: 'art_id',
});

Art.hasMany(Eval, {
    foreignKey: ''
})