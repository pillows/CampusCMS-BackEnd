

const Sequelize = require('sequelize')
const Model = Sequelize.Model

class Campuses extends Model {}

Campuses.init({
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
}, {
    sequelize,
    modelName: 'campuses'
}
)
