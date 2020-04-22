const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Controller Sessions
routes.post('/sessions', SessionController.create);

// Controllers Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Controllers Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Controllers Profiles
routes.get('/profile', ProfileController.index);

module.exports = routes;