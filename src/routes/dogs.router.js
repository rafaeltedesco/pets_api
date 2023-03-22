const { Router } = require('express');
const { dogsController } = require('../controllers');
const { handleAsyncError } = require('../middlewares/handleErrors');

const dogsRouter = Router();

dogsRouter
  .get('/', handleAsyncError(dogsController.showDogs))
  .post('/', handleAsyncError(dogsController.createDog))
  .get('/:id', handleAsyncError(dogsController.showDog))
  .put('/:id', handleAsyncError(dogsController.updateDog))
  .delete('/:id', handleAsyncError(dogsController.deleteDog));

module.exports = dogsRouter;
