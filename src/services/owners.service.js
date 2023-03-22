const { OwnerDTO } = require('../dtos');
const { ownersRepository } = require('../repository');

const findAll = async () => ownersRepository
  .findAll();

const findById = async (id) => ownersRepository
  .findById(id);

const create = async (ownerData) => {
  const ownerDTO = new OwnerDTO()
    .build(ownerData);

  const owner = await ownersRepository
    .create(ownerDTO);

  return owner;
};

const update = async (id, ownerData) => {
  const ownerDTO = new OwnerDTO()
    .build(ownerData);
  const owner = await ownersRepository
    .update(id, ownerDTO);
  return owner;
};

const deleteOne = async (id) => ownersRepository
  .deleteOne(id);

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteOne,
};
