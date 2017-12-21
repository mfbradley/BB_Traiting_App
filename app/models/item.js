module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
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
        image: DataTypes.BLOB,
        location: DataTypes.STRING
    });

    Item.associate = function(models) {
        Item.belongsTo(models.user, {
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
