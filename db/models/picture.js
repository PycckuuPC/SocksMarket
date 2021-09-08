'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Sock}) {
      this.hasMany(Sock, { foreignKey: "sock_id"})
    }
  }
  Picture.init({
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};