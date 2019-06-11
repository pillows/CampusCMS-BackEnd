const Sequelize = require('sequelize')
const fs = require("fs");

// const sequelize = new Sequelize()
// console.log(process.env.databaseURI);
// let content = JSON.parse(fs.readFileSync("./secrets.json"));
const sequelize = new Sequelize(process.env.databaseURI, {dialect:"postgres"});


module.exports = [sequelize,Sequelize]
