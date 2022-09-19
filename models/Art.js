//create model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config.js");
class Art extends Model {}
Art.init(
  //create schema
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "art",
  }
);
module.exports = Art;
