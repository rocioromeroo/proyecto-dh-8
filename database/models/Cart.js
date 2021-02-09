module.exports = (sequelize, datatypes) => {
    let alias = "Cart"
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total_price: {
            type: datatypes.INTEGER
        }
    }
    let config = {
        tableName: "carts",
        timestamps: false
    }
     let Cart = sequelize.define(alias, cols, config);
     Cart.associate = function(models) {     
        Cart.belongsTo(models.User, {
            as: "user",                   
            foreignKey: "carts_id"  
        })
        Cart.hasOne(models.User_Cart, {
            as: "user_cart",                   
            foreignKey: "user_cart_id"  
        })  
    };  
    return Cart;
};