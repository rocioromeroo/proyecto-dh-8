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
            foreignKey: "users_id"  
        }),
        Cart.hasMany(models.Product, {
            as: "product",                   
            foreignKey: "products_id"  
        })  
    };  
    return Cart;
};