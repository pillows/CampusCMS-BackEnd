const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://lulylais:0pMYbvDCzD64DklyVmSZqql9n7HRqzTt@raja.db.elephantsql.com:5432/lulylais');
const Students =  require("./StudentModel")(sequelize)
const Campus = require("./CampusModel")(sequelize)

Students.belongsTo(Campus)
Campus.hasMany(Students)

sequelize.sync()

console.log('exporting the models',Students)
module.exports=[Students,Campus];