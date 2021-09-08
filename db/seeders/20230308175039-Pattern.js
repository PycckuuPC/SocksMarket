/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      { picture: 'stars.png' },
      { picture: 'figures.png' },
      { picture: 'tringles.png' },
      { picture: 'dots.png' },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
