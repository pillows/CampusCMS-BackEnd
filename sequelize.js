const Sequelize = require('sequelize')
const fs = require("fs");

// const sequelize = new Sequelize()

let content = JSON.parse(fs.readFileSync("../secrets.json"));
const sequelize = new Sequelize(content.databaseURI, {dialect:"postgres"});


module.exports = [sequelize,Sequelize]
