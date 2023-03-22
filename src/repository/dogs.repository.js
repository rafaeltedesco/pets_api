const connection = require('../db');
const { DogDAO } = require('../daos');

const dogDAO = new DogDAO(connection);

const findAll = async () => dogDAO.findAll();

const findById = async (id) => dogDAO.findById(id);

const create = async (dogDTO) => dogDAO.create(dogDTO);

const update = async (id, dogDTO) => dogDAO.update(id, dogDTO);

const deleteOne = async (id) => dogDAO.deleteOne(id);

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteOne,
};
