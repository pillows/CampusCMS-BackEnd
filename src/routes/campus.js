const sequelize = require('../../sequelize')
let db = sequelize[0]
const Campus = require("../../src/models/CampusModel")(db)

let allCampuses = (req, res) => {
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

    Campus.findAll().then(campus => {
        res.status(200).json(campus);
      // projects will be an array of all Project instances
    })

};

let routes = {
    all:allCampuses
}

module.exports = routes
