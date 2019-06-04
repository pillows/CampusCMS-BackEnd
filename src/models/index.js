const sequelize = require('../sequelize')
const Students = require("./StudentModel")(sequelize)
const Campus = require("./CampusModel")(sequelize)

Students.belongTo(Campus)
Campus.belongsToMany(Students)
