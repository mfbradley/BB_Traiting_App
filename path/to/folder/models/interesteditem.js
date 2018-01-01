module.exports = function(sequelize, DataTypes) {
  var hasInterests = sequelize.define('interest', {
  }, {});

  hasInterests.associate = function(models) {
  hasInterests.belongsTo(models.message, { as : 'message', foreignKey: 'messageId' });
  hasInterests.belongsTo(models.user, { as: 'user', foreignKey: 'userId' });
  };

  return hasInterests;
};