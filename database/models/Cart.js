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
    return Cart;
};