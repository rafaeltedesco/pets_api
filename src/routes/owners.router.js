const { Router } = require('express');
const { ownersController } = require('../controllers');

const ownersRouter = Router();

ownersRouter
  .get('/', ownersController.showOwners)
  .post('/', ownersController.createOwner)
  .get('/:id', ownersController.showOwner)
  .put('/:id', ownersController.updateOwner)
  .delete('/:id', ownersController.deleteOwner);

module.exports = ownersRouter;
