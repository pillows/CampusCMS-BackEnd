module.exports = function(sequelize) {
    // const Campus = require("./CampusModel")(sequelize, Sequelize)
    let Students = sequelize.define("Students",{
        firstName:{
            type:sequelize.Sequelize.STRING,
            allowNull: false,
            notEmpty: true

        },
        lastName:{
            type:sequelize.Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        email:{
            type:sequelize.Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isEmail: true
        },
        imageUrl:{
            type:sequelize.Sequelize.STRING,
            defaultValue: "https://hunter.cuny.edu",
        },
        gpa:{
            type:sequelize.Sequelize.DOUBLE,
            len: [0.0,4.0]
        }
    },{
        sequelize:sequelize,
        modelName:"students"
    })
    return Students
}