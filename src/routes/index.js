const routes = require('express').Router();
const students = require('./students')
const campuses = require('./campus')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/campuses', campuses.all);

routes.get('/students', students.all);
routes.get('/students/:id', students.find);
routes.post('/students/create', students.create);

module.exports = routes;
