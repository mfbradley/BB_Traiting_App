module.exports = function(sequelize, DataTypes) {
    var hasInterest = sequelize.define("hasInterest", {
        type: DataTypes.STRING
    });
    // We're saying that a hasInterest should belong to an ITEM
    hasInterest.associate = function(models) {
        // A hasInterest can't be created without an ITEM due to the foreign key constraint
        hasInterest.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return hasInterest;
};
