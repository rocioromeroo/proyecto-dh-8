module.exports = (sequelize, datatypes) => {
    let alias = "Cart_Product"
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
        },
        subtotal: {
            type: datatypes.DECIMAL
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
        tableName: "cart_product",
        timestamps: true
    }
    let Cart_Product = sequelize.define(alias, cols, config);
     
  
    return Cart_Product;
};