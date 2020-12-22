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
    return Warranty;
};