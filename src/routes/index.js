const routes = require('express').Router();
const students = require('./students')
const campuses = require('./campus')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/campuses', campuses.all);

module.exports = routes;
