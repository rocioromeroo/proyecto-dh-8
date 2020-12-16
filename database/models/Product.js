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
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
     let Product = sequelize.define(alias, cols, config);
    /* Pelicula.associate = function(models) {     
        Pelicula.belongsTo(models.Genero, {
            as: "genero",                   
            foreignKey: "genre_id"  
        })
        Pelicula.belongsToMany(models.Actor, {
            as: "actores",                  
            through: "actor_movie",
            foreignKey: "movie_id",
            otherkey: "actor_id",
            timestamps: false,
            onDelete: 'CASCADE'
        })  
    };  */
    return Product;
};