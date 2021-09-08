/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      { picture: '#FFFFFF' },
      { picture: '#FFFF00' },
      { picture: '#800080' },
      { picture: '#FF1493' },
      { picture: '#00FF7F' },
      { picture: '#00FFFF' },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
