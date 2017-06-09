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
