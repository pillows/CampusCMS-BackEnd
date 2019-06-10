const sequelize = require('../../sequelize')
let db = sequelize[0]
const Campus = require("../../src/models/CampusModel")(db)

let allCampuses = (req, res) => {
    Campus.findAll().then(campus => {
        res.status(200).json(campus);
      // projects will be an array of all Project instances
    })

};

let routes = {
    all:allCampuses
}

module.exports = routes
