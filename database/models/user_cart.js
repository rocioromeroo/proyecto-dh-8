module.exports = (sequelize, datatypes) => {
    let alias = "User_Cart"
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: datatypes.INTEGER
        },
        unit_price: {
            type: datatypes.DECIMAL
        }
    }
    let config = {
        tableName: "user_cart",
        timestamps: false
    }
     let User_Cart = sequelize.define(alias, cols, config);
     User_Cart.associate = function(models) {     
        User_Cart.belongsTo(models.Cart, {
            as: "user_cart",                   
            foreignKey: "user_cart_id"  
        })  
    };  
    return User_Cart;
};