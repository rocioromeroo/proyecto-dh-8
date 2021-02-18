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
        },
        createdAt: {
            field: 'created_at',
            type: datatypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: datatypes.DATE
        }
    }
    let config = {
        tableName: "carts",
        timestamps: true
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
            foreignKey: "carts_id",
            otherKey: "products_id",
            timestamps: false
        })

        
    };  
    return Cart;
};