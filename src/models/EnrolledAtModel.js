module.exports = function(sequelize) {
    let EntrolledAt = sequelize.define("EntrolledAt",{
        studentId:{
            type:sequelize.Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true
        },
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
        campusId:{
            type:sequelize.Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true
        }
        
    },{
        sequelize:sequelize,
        modelName:"enrolledat"
    })
    return EntrolledAt
}
