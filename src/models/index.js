const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.databaseURI);
const Students =  require("./StudentModel")(sequelize)
const Campus = require("./CampusModel")(sequelize)

Students.belongsTo(Campus)
Campus.hasMany(Students)

sequelize.sync()

console.log('exporting the models',Students)
module.exports=[Students,Campus];