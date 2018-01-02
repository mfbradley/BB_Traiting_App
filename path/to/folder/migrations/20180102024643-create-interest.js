'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('interests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pirateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pirates',
          key: 'id'
        }
      },
      tradeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trades',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('interests');
  }
};