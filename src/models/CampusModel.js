
const Sequelize = require('sequelize')
module.exports = function(sequelize) {
    class Campus extends Sequelize.Model {}
    Campus.init({
        name:{
            type:Sequelize.STRING,
            allowNull: false,
            notEmpty: true

        },
        imageUrl:{
            type:Sequelize.STRING,
            defaultValue: "https://hunter.cuny.edu",
        },
        address:{
            type:Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        description:{
            type:Sequelize.STRING,
            args:[0,500]
        },
        
    },{
        sequelize,
        modelName:"campus"
    })

    return Campus
}

