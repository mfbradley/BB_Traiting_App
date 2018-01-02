'use strict';

module.exports = function(sequelize, DataTypes) {
  var pirate = sequelize.define('pirate', {
    piratename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      displayname: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  pirate.associate = function(models) {
    pirate.hasMany(models.trade, { as: 'trades', foreignKey: 'authorId' });
    pirate.hasMany(models.interest, { as: 'commit', foreignKey: 'pirateId' });
  };

  return pirate;
};