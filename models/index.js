const fs = require('fs'),
      path = require('path'),
      sqlite = require('sqlite'),
      Sequelize = require('sequelize');

  let db = {};
  let modelPath = path.join(__dirname + '/../models');
  let sequelize = new Sequelize({
    host: 'localhost',
    storage:'./db/database.db',
    dialect: 'sqlite'
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

// initializing the file path

 fs.readdirSync(modelPath).filter(function(file) {
   return (file.indexOf('.') !== 0) && (file !== 'index.js');
 }).forEach(function(file){
   let model = sequalize.import(path.join(modelPath, file));
   db[model.name] = model;
 });

  module.exports = db;
