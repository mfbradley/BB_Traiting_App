module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  message.associate = function(models) {
    message.belongsTo(models.user, { as: 'author', foreignKey: 'authorId' });
    message.hasMany(models.interest, { as: 'interested', foreignKey: 'messageId'});
  };
  return message;
};
