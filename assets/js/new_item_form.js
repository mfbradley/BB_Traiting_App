//client side JS
$(document).ready(function() {
    $("#addItem").on("click", function(event) {

        var newItem = {
            name: $("#newItemName").val().trim(),
            estimatedValue: $("#estValue").val().trim(),
            category: $("#category").val().trim(),
            description: $("#description").val().trim(),
            // image: ("#image").val().trim(),
            location: $("#userLocation").val().trim()

        };
        console.log(newItem);


        $.ajax("api/items", {
            type: "POST",
            data: newItem
        }).then(function() {
            console.log("new item added!");
            location.reload();
        });
    });

});

//item object
// module.exports = function(sequelize, DataTypes) {
//     var Item = sequelize.define("item", {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         estimatedValue: DataTypes.INTEGER,
//         category: DataTypes.STRING,
//         description: DataTypes.TEXT,
//         image: DataTypes.BLOB,
//         location: DataTypes.STRING
//     });

//     Item.associate = function(models) {
//         Item.belongsTo(models.user, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//         Item.hasMany(models.hasInterest, {
//             onDelete: "cascade"
//         });
//     };

//     return Item;
// };
