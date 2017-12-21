module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        estimatedValue: DataTypes.INTEGER,
        category: DataTypes.STRING,
        description: DataTypes.TEXT,
        Trade_requested: [],
        image: DataTypes.Blob
    });

    Item.associate = function(models) {
        Item.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Item;
};
