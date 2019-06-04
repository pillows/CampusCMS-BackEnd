const sequelize = require('../../sequelize')
let db = sequelize[0]
const Student = require("../../src/models/StudentModel")(db)

let allStudents = (req, res) => {
    // db.sync()
    // .then(()=> Student.create({
    //     firstName:"Matt",
    //     lastName:"Wong",
    //     email:"matt@gmail.com",
    //     imageUrl:"https://hunter.cuny.edu",
    //     gpa:4.0
    // }))
    // .then(student => {
    //     res.status(200).json(student.toJSON());
    // });

    Student.findAll().then(student => {
        res.status(200).json(student);
      // projects will be an array of all Project instances
    })

};

let routes = {
    all:allStudents
}

module.exports = routes
