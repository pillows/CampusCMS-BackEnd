const sequelize = require('../sequelize')

const Student = require("../models/StudentModel")(sequelize[0],sequelize[1])

const db = sequelize[0]
db.sync()
.then(()=> Student.create({
    firstName:"Matt",
    lastName:"Wong",
    email:"matt@gmail.com",
    imageUrl:"https://hunter.cuny.edu",
    gpa:4.0
}))
.then(student => {
    console.log(student.toJSON())
});

// Student.findAll({raw:true})
// .then(students=>{
//     console.log(students)
// })
