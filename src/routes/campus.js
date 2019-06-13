const sequelize = require('../../sequelize')
let db = sequelize[0]

const Student = require("../../src/models/StudentModel")(db)
const Campus = require("../../src/models/CampusModel")(db)

let allCampuses = (req, res) => {
    Campus.findAll({
        raw: true,
        include:[{model:Student, as:'student'}]
    }).then(campus => {
        let completeArray = []
        // for(let i = 0; i < campus.length; i++){

        //     let studObj = getStudents(campus[i].id)
            
        //     campus[i].students = studObj
        //     completeArray.push(campus)
        // }

        // let students = Promise.resolve(getStudents(campus[0].id))
        // let students = getStudents(campus[0].id)
        // console.log("test", students)
        // getStudents(campus[0].id).then(students => console.log('Test -->', students))
        // completeArray
        
        res.status(200).json(campus);
      // projects will be an array of all Project instances
    })

};

let findCampus = (req, res) => {
	let campusId = req.params.id

    Campus.findByPk(campusId).then(campus => {

        getStudents(campusId)
        .then(students => {
            campus.dataValues.students = students
            res.status(200).json(campus);
        })
        
    })
}

let createCampus = (req, res) => {
	let name = req.body.name
    let imageUrl = req.body.imageUrl
    let address = req.body.address
    let description = req.body.description


    Campus.create({
        name,
        imageUrl,
        address,
        description
    })
    .then(campus => {
        res.status(200).json(campus);
    });
}

let deleteCampus = (req, res) => {
	let id = req.body.id

    Campus.destroy({
        where:{
            id:id
        }
    }).then(campus => {
        res.status(200).json(campus);
    });
}

let updateCampus = (req, res) => {
	let id = req.body.id
    let name = req.body.name
    let imageUrl = req.body.imageUrl
    let address = req.body.address
    let description = req.body.description

    Campus.update({
        name,
        imageUrl,
        address,
        description
    },{
        where:{
            id:id
        }
    }

    ).then(campus => {
        res.status(200).json(campus);
    });
}

let addStudent = (req, res) => {

	let studentId = req.body.studentId;
	let campusId = req.body.campusId;
    Campus.create({
    	firstName,
    	lastName,
        studentId,
		campusId
    })
    .then(campus => {
        res.status(200).json(campus);
    });
}

let removeStudent = (req, res) => {

}



let routes = {
    all: allCampuses,
    find: findCampus,
    create: createCampus,
    delete: deleteCampus,
    update: updateCampus,
    addStudent:addStudent,
    removeStudent:removeStudent
}

module.exports = routes
