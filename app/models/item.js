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
        image: DataTypes.Blob,
        location: DataTypes.String
    });

    Item.associate = function(models) {
        Item.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Item.hasMany(models.hasInterest, {
            onDelete: "cascade"
        });
    };

    return Item;
};
