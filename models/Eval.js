const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config.js");
class Eval extends Model {}
Eval.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eval_value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "art",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "eval",
  }
);
module.exports = Eval;
