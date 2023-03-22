const { Router } = require('express');

const dogsRouter = require('./dogs.router');
const ownersRouter = require('./owners.router');

const routers = Router();

routers.use('/dogs', dogsRouter);
routers.use('/owners', ownersRouter);

module.exports = routers;
