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
routes.delete('/students/delete', students.delete);
routes.put('/students/update', students.update)

module.exports = routes;
