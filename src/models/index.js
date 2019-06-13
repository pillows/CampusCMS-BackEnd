
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.databaseURI, {
	dialect:"postgres",
	dialectOptions: {
    	ssl: true,
	},
	logging: false
});

const Students = require("./StudentModel")(sequelize)
const Campus = require("./CampusModel")(sequelize)

Students.belongsTo(Campus)
Campus.hasMany(Students)

Sequelize.sync()