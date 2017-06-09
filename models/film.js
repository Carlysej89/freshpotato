module.exports = function(sequelize, DataTypes){

  let film = sequelize.define('Films', {
    title: DataTypes.STRING,
    release_Date: DataTypes.INTERGER,
    runtime: DataTypes.INTERGER,
    revenue: DataTypes.INTERGER,
    tagline: DataTypes.STRING,
    budget: DataTypes.INTERGER,
    status: DataTypes.STRING,
    original_language: DataTypes.STRING,
    genre_id: DataTypes.INTERGER,
    createdAt: DataTypes.VIRTUAL,
    updateAt: DataTypes.VIRTUAL
  });

  return Film;
  
};
