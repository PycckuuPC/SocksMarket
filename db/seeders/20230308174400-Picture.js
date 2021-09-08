/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pictures', [
      { picture: 'duck.png' },
      { picture: 'kaktus.png' },
      { picture: 'lama.png' },
      { picture: 'yodik.png' },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
  },
};
