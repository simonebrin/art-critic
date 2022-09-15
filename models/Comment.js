const { Model, DataTypes } = require("sequelize");
class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    art_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "art",
            key: "id"
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        }
    }
 
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
module.exports = Comment;
