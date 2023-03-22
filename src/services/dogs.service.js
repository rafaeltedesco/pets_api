const { DogDTO } = require('../dtos');
const { dogsRepository } = require('../repository');
const logger = require('../utils/logger');

const findAll = async () => dogsRepository
  .findAll();

const findById = async (id) => dogsRepository
  .findById(id);

const create = async (dogData) => {
  const dogDTO = new DogDTO()
    .build(dogData);
  logger.info(JSON.stringify(dogDTO));
  const dog = await dogsRepository
    .create(dogDTO);

  return dog;
};

const update = async (id, dogData) => {
  const dogDTO = new DogDTO()
    .build(dogData);
  const dog = await dogsRepository
    .update(id, dogDTO);
  return dog;
};

const deleteOne = async (id) => dogsRepository
  .deleteOne(id);

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteOne,
};
