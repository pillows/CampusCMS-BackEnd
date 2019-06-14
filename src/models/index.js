const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://lditjxoz:gLu4AqocSfBpEVrTcY1UvPjIM9HxyoYx@raja.db.elephantsql.com:5432/lditjxoz');
const Students =  require("./StudentModel")(sequelize)
const Campus = require("./CampusModel")(sequelize)

Students.belongsTo(Campus)
Campus.hasMany(Students)

sequelize.sync()

console.log('exporting the models',Students)
module.exports=[Students,Campus];