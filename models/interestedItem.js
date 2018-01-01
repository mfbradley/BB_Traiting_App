module.exports = function(sequelize, DataTypes) {
  var interest = sequelize.define('interest', {
  }, {});

  interest.associate = function(models) {
    interest.belongsTo(models.message, { as : 'message', foreignKey: 'messageId' });
    interest.belongsTo(models.user, { as: 'user', foreignKey: 'userId' });
  };

  return interest;
};