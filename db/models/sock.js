'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Color, Pattern, Picture}) {
      this.belongsTo(Color, { foreignKey: "color_id" });
      this.belongsTo(Pattern, { foreignKey: "pattern_id" });
      this.belongsTo(Picture, { foreignKey: "picture_id" });
    }
  }
  Sock.init({
    color_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    picture_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};