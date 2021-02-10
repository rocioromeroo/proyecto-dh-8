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
        })
        Cart.belongsToMany(models.Product, {
            as: "carts",					
            through: "cart_product",
            foreignKey: "cart_id",
            otherkey: "product_id",
            timestamps: false
        })

        
    };  
    return Cart;
};