module.exports = (sequelize, datatypes) => {
      let alias = "Category"
      let cols = {
          id: {
              type: datatypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
          },
          name: {
              type: datatypes.STRING
          }
      }
      let config = {
          tableName: "categories",
          timestamps: false
      }
       let Category = sequelize.define(alias, cols, config);
       
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
      return Category;
  };