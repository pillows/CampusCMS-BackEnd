module.exports = function(sequelize) {
    const Student = require("./StudentModel")(sequelize)
    let Campus = sequelize.define("Campus",{
        name:{
            type:sequelize.Sequelize.STRING,
            allowNull: false,
            notEmpty: true

        },
        imageUrl:{
            type:sequelize.Sequelize.STRING,
            defaultValue: "https://hunter.cuny.edu",
        },
        address:{
            type:sequelize.Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        description:{
            type:sequelize.Sequelize.STRING,
            args:[0,500]
        }
    },{
        sequelize:sequelize,
        modelName:"campus"
    })
    return Campus
}
