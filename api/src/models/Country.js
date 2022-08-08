const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.STRING,
      allowNull:false
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:false
    },
    area:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    poblation:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  });
};
