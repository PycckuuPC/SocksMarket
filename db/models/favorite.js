const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    sock_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
