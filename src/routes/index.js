const routes = require('express').Router();
const students = require('./students')
const campuses = require('./campus')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/campuses', campuses.all);
routes.get('/campuses/:id', campuses.find);
routes.post('/campuses/create', campuses.create);
routes.delete('/campuses/delete', campuses.delete);
routes.put('/campuses/update', campuses.update)

routes.get('/students', students.all);
routes.get('/students/:id', students.find);
routes.post('/students/create', students.create);

/*
Deletes student from database record

params:
id (very insecure i know)

return:
Student object in json?
*/
routes.delete('/students/delete', students.delete);

/*
Updates information about the student

params:
id, firstName, lastName, email, imageUrl, gpa

return:
Student object in json
*/
routes.put('/students/update', students.update)

/*
Creates or changes a connection between the school and student
params:
studentId and campusId

return:
for now just always true
*/
routes.post('/students/updateCampus', students.changeSchool)

module.exports = routes;
