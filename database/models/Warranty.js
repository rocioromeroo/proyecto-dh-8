module.exports = (sequelize, datatypes) => {
    let alias = "Warranty"
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        duration: {
            type: datatypes.INTEGER
        },
        country_origin: {
            type: datatypes.STRING
        },
        oficial_coverage: {
            type: datatypes.INTEGER
        }
    }
    let config = {
        tableName: "warranties",
        timestamps: false
    }
     let Warranty = sequelize.define(alias, cols, config);
     Warranty.associate = function(models) {     
        Warranty.hasMany(models.Product, {
            as: "products",                   
            foreignKey: "warranties_id"  
        })
    };  
    return Warranty;
};