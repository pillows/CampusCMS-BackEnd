const Sequelize = require('sequelize')
const Model = Sequelize.Model

const sequelize = require("../sequelize")
class Campuses extends Model {}

Campuses.init({
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
    }
}, {
    sequelize,
    modelName: 'campuses'
}
)
