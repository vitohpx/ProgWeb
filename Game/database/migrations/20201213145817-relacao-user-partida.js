'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Partidas', {
      type: 'foreign key',
      fields: ['userId'],
      name: 'partidas_users_fk',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Partidas',
      'partidas_users_fk'
    )
  }
};
