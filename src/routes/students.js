const models= require('../models/index')
const Student=models[0]
const Campus=models[1]

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


// Create of CRUD
let createStudent = (req, res) => {

    // Grabbing all parameters of the POST request to create a student
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let imageUrl = req.body.imageUrl
    let gpa = req.body.gpa
    let schoolId = req.body.schoolId



    Student.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        imageUrl:imageUrl,
        gpa:gpa,
        campusId:schoolId
    })
    .then(student => {
        // addStudent(student.id, firstName, lastName, schoolId)
        res.status(200).send(student);
    })
    .catch(err => {
            console.log(err);
    })

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


let changeEnrolledSchool = (req, res) => {

    let studentId = req.body.studentId
    let campusId = req.body.campusId
    console.log("student",studentId,"campus", campusId)
    Student.findOne({
        where:{id:studentId},
        raw: true
    }).then((student) => {
        console.log(student)
        student.update({
            campusId:campusId
        })
        res.status(200).json({status:"success"});

    }).catch((err)=>{
        console.log(err)
        res.status(400).json({status:"fuck u"});
    })

    
}

let routes = {
    all: allStudents,
    find: findStudent,
    create: createStudent,
    delete: deleteStudent,
    update: updateStudent,
    changeSchool: changeEnrolledSchool
}

module.exports=routes;