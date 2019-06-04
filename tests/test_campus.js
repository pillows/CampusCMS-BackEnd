const sequelize = require('../sequelize')

const Campus = require("../src/models/CampusModel")(sequelize[0],sequelize[1])

const db = sequelize[0]
db.sync()
.then(()=> Campus.create({
    name:"Hunter College",
    imageUrl:"https://hunter.cuny.edu",
    address:"695 Park Ave, New York, NY 10065",
    description: "school."
}))
.then(campus => {
    console.log(campus.toJSON())
});

// Student.findAll({raw:true})
// .then(students=>{
//     console.log(students)
// })
