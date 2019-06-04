const Sequelize = require('sequelize')
const Model = Sequelize.Model


// const sequelize = require("../sequelize")


module.exports = function(sequelize, Sequelize) {
    return sequelize.define("Students",{
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
        }
    },{
        sequelize:sequelize,
        modelName:"students"
    })
}
    // class Students extends Sequelize.Model {}
    // Students.init({
    //     firstName:{
    //         type:Sequelize.STRING,
    //         allowNull: false,
    //         notEmpty: true
    //
    //     }
        // lastName:{
        //     type:Sequelize.STRING,
        //     allowNull: false,
        //     notEmpty: true
        // },
        // email:{
        //     type:Sequelize.STRING,
        //     allowNull: false,
        //     notEmpty: true,
        //     isEmail: true
        // },
        // imageUrl:{
        //     type:Sequelize.STRING,
        //     defaultValue: "https://hunter.cuny.edu",
        // },
        // gpa:{
        //     type:Sequelize.DOUBLE,
        //     len: [0.0,4.0]
        // }
    // }, {
    //     sequelize:sequelize,
    //     modelName: 'campuses'
    // }
    // )
