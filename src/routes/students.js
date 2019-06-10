const sequelize = require('../../sequelize')
let db = sequelize[0]
const Student = require("../../src/models/StudentModel")(db)

// Read of CRUD
let allStudents = (req, res) => {
    Student.findAll().then(student => {
        res.status(200).json(student);
    })
};

// Read of CRUD
let findStudent = (req, res) => {
    let studentId = req.params.id

    Student.findByPk(studentId).then(student => {
        res.status(200).json(student);
    })

};

// Create of CRUD
let createStudent = (req, res) => {

    // Grabbing all parameters of the POST request to create a student
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let imageUrl = req.body.imageUrl
    let gpa = req.body.gpa

    db.sync()
    .then(()=> Student.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        imageUrl:imageUrl,
        gpa:gpa
    }))
    .then(student => {
        res.status(200).json(student);
    });

}

let deleteStudent = (req, res) => {
    res.status(200).send("2");
}

let routes = {
    all: allStudents,
    find: findStudent,
    create: createStudent,
    delete: deleteStudent
}

module.exports = routes
