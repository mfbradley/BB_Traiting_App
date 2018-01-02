module.exports = function(sequelize, DataTypes) {
  var interest = sequelize.define('interest', {
  }, {});

  interest.associate = function(models) {
  interest.belongsTo(models.trade, { as : 'trade', foreignKey: 'tradeId' });
  interest.belongsTo(models.pirate, { as: 'pirate', foreignKey: 'pirateId' });
  };

  return interest;
};