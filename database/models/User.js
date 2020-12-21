module.exports = (sequelize, datatypes) => {
      let alias = "User"
      let cols = {
          id: {
              type: datatypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
          },
          username: {
              type: datatypes.STRING
          },
          email: {
            type: datatypes.STRING
          },
          password: {
              type: datatypes.STRING
          },
          first_name: {
            type: datatypes.STRING
          },
          last_name: {
            type: datatypes.STRING
          },
          address: {
            type: datatypes.STRING
          },
          profile: {
            type: datatypes.STRING
          }
      }
      let config = {
          tableName: "users",
          timestamps: false
      }
       let User = sequelize.define(alias, cols, config);
       
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
      return User;
  };