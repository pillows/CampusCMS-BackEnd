const routes = require('express').Router();
const students = require('./students')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/students', students.all);

module.exports = routes;
