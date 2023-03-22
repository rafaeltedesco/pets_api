const connection = require('../db');
const { OwnerDAO } = require('../daos');

const ownerDAO = new OwnerDAO(connection);

const findAll = async () => ownerDAO.findAll();

const findById = async (id) => ownerDAO.findById(id);

const create = async (ownerDTO) => ownerDAO.create(ownerDTO);

const update = async (id, ownerDTO) => ownerDAO.update(id, ownerDTO);

const deleteOne = async (id) => ownerDAO.deleteOne(id);

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteOne,
};
