const Sequelize = require('sequelize')
module.exports =function studentModel(sequelize) {
    // const Campus = require("./CampusModel")(sequelize, Sequelize)

    class Students extends Sequelize.Model {}

    Students.init({
        firstName:{
            type:Sequelize.STRING,
            allowNull: false,
            notEmpty: true

        },
        lastName:{
            type:Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        email:{
            type:Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isEmail: true
        },
        imageUrl:{
            type:Sequelize.STRING,
            defaultValue: "https://hunter.cuny.edu",
        },
        gpa:{
            type:Sequelize.DOUBLE,
            len: [0.0,4.0]
        },
        belongsTo:{
            type:Sequelize.STRING,
            notEmpty: true
        }
    },{
        sequelize,
        modelName:"students"
    });


    return Students
}