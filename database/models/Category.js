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
       Category.associate = function(models) {     
          Category.belongsTo(models.Product, {
              as: "product",                   
              foreignKey: "products_id"  
          }) 
      };  
      return Category;
  };