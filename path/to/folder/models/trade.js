'use strict';

module.exports = function(sequelize, DataTypes) {
  var trade = sequelize.define('trade', {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  trade.associate = function(models) {
    trade.belongsTo(models.pirate, { as: 'author', foreignKey: 'authorId' });
    trade.hasMany(models.interest, { as: 'commit', foreignKey: 'tradeId'});
  };
  return trade;
};