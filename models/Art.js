const { Model, DataTypes } = require("sequelize");
class Art extends Model {}
Art.init(
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
    avg_eval: {
        type: DataTypes.INTEGER,
    },
    comments: {
        type: DataTypes.STRING
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
