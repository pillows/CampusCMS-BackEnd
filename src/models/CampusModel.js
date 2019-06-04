module.exports = function(sequelize, Sequelize) {
    return sequelize.define("Campus",{
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
    },{
        sequelize:sequelize,
        modelName:"campus"
    })
}
