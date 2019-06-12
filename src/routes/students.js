dconst sequelize = require('../../sequelize')
let db = sequelize[0]
const Student = require("../../src/models/StudentModel")(db)
const EnrolledAt = require("../../src/models/EnrolledAtModel")(db)

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
        getEnrolledCampus(student.id)
        .then(enrolled => {
            // console.log(enrolled.campusId);
            
            student.dataValues.school = enrolled.campusId
            // console.log(student);

            // let studentResults = student
            // console.log(studentResults.dataValues);
            res.status(200).json(student);
            // return enrolled.campusId
        })
        
    })

};

let getEnrolledCampus = (studentId) => {
    let campus = EnrolledAt.findOne({
        where:{
            studentId
        }
    })

    return campus

    // console.log("test", campus);
}

// Create of CRUD
let createStudent = (req, res) => {

    // Grabbing all parameters of the POST request to create a student
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let imageUrl = req.body.imageUrl
    let gpa = req.body.gpa
    let schoolId = req.body.schoolId



    db.sync()
    .then(()=> Student.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        imageUrl:imageUrl,
        gpa:gpa
    }))
    .then(student => {
        addStudent(student.id, firstName, lastName, schoolId)
        res.status(200).json(student);
    });

}

let deleteStudent = (req, res) => {
    let id = req.body.id
    Student.destroy({
        where:{
            id:id
        }
    }).then(student => {
        res.status(200).json(student);
    });
}

let updateStudent = (req, res) => {
    let id = req.body.id
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let imageUrl = req.body.imageUrl
    let gpa = req.body.gpa

    Student.update({
        firstName:firstName,
        lastName:lastName,
        email:email,
        imageUrl:imageUrl,
        gpa:gpa
    },{
        where:{
            id:id
        }
    }

    ).then(student => {
        res.status(200).json(student);
    });
}

let addStudent = (studentId, firstName, lastName, campusId) => {

    db.sync()
    .then(()=> EnrolledAt.create({
        studentId,
        firstName,
        lastName,
        campusId
    }))
}

let changeEnrolledSchool = (req, res) => {

    let studentId = req.body.studentId
    let campusId = req.body.campusId

    db.sync()
    .then(()=>EnrolledAt.update({
        studentId,
        campusId

    },{
        where:{
            studentId
        }
    }))
}

let routes = {
    all: allStudents,
    find: findStudent,
    create: createStudent,
    delete: deleteStudent,
    update: updateStudent,
    changeSchool: changeEnrolledSchool
}

module.exports = routes
