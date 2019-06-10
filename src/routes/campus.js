const sequelize = require('../../sequelize')
let db = sequelize[0]
const Campus = require("../../src/models/CampusModel")(db)

let allCampuses = (req, res) => {
    db.sync()
    .then(()=> Campus.findAll().then(campus => {
        res.status(200).json(campus);
      // projects will be an array of all Project instances
    }))

};

let findCampus = (req, res) => {
	let campusId = req.params.id

    Campus.findByPk(campusId).then(campus => {
        res.status(200).json(campus);
    })
}

let createCampus = (req, res) => {
	let name = req.body.name
    let imageUrl = req.body.imageUrl
    let address = req.body.address
    let description = req.body.description


    db.sync()
    .then(()=> Campus.create({
        name,
        imageUrl,
        address,
        description
    }))
    .then(campus => {
        res.status(200).json(campus);
    });
}

let deleteCampus = (req, res) => {
	let id = req.body.id
    db.sync()
    .then(()=> Campus.destroy({
        where:{
            id:id
        }
    })).then(campus => {
        res.status(200).json(campus);
    });
}

let updateCampus = (req, res) => {
	let id = req.body.id
    let name = req.body.name
    let imageUrl = req.body.imageUrl
    let address = req.body.address
    let description = req.body.description

    db.sync()
    .then(()=> Campus.update({
        name,
        imageUrl,
        address,
        description
    },{
        where:{
            id:id
        }
    }

    )).then(campus => {
        res.status(200).json(campus);
    });
}

let addStudent = (req, res) => {

	let studentId = req.body.studentId;
	let campusId = req.body.campusId;

	EnrolledAt.create(
		{
			studentId,
			campusId
		}
	)

	db.sync()
    .then(()=> Campus.create({
    	firstName,
    	lastName,
        studentId,
		campusId
    }))
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
