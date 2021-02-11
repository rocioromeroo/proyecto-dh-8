module.exports = (sequelize, datatypes) => {
      let alias = "User"
      let cols = {
          id: {
              type: datatypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
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
          },
          image: {
            type: datatypes.STRING
        }
      }
      let config = {
          tableName: "users",
          timestamps: false
      }
       let User = sequelize.define(alias, cols, config);
       User.associate = function(models) {     
          User.hasMany(models.Cart, {
              as: "carts",                   
              foreignKey: "users_id"  
          })  
      };  
      return User;
  };