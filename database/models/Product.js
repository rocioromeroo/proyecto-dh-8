module.exports = (sequelize, datatypes) => {
    let alias = "Product"
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: datatypes.STRING
        },
        price: {
            type: datatypes.DECIMAL
        },
        description: {
            type: datatypes.STRING
        },
        discount: {
            type: datatypes.DECIMAL
        },
        stock: {
            type: datatypes.INTEGER
        },
        speed: {
            type: datatypes.INTEGER
        },
        battery: {
            type: datatypes.INTEGER
        },
        wheel: {
            type: datatypes.INTEGER
        },
        light: {
            type: datatypes.INTEGER
        },
        folding: {
            type: datatypes.INTEGER
        },
        brake: {
            type: datatypes.INTEGER
        },
        color: {
            type: datatypes.STRING
        },
        weight: {
            type: datatypes.INTEGER
        },
        image: {
            type: datatypes.STRING
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
     let Product = sequelize.define(alias, cols, config);
     Product.associate = function(models) {   
        Product.belongsTo(models.Category, {
            as: "category",                   
            foreignKey: "categories_id"  
        }) 
        
    //     Product.belongsTo(models.Cart, {
    //         as: "cart",                   
    //         foreignKey: "carts_id"  
    //     }),
    //     Product.hasOne(models.Warranty, {
    //         as: "warranty",                   
    //         foreignKey: "warranties_id"  
    //     }), 
        // Product.hasMany(models.Category, {
        //     as: "categories",                   
        //     foreignKey: "categories_id"  
        // })
    };  
    return Product;
};