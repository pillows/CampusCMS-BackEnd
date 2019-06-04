const Sequelize = require('sequelize')
const fs = require("fs");
const CampusModel = require('./models/CampusModel')
const StudentModel = require('./models/StudentModel')

// const sequelize = new Sequelize()

let content = JSON.parse(fs.readFileSync("secrets.json"));
const sequelize = new Sequelize(content.databaseURI);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
