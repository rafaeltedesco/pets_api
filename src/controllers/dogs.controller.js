const { dogsService } = require('../services');

const showDogs = async (_req, res) => {
  const dogs = await dogsService.findAll();
  return res.status(200).json(dogs);
};

const showDog = async (req, res) => {
  const { id } = req.params;
  const dog = await dogsService.findById(id);
  return res.status(200).json(dog);
};

const createDog = async (req, res) => {
  const dog = await dogsService.create(req.body);
  return res.status(201).json(dog);
};

const updateDog = async (req, res) => {
  const { id } = req.params;
  const dog = await dogsService.update(Number(id), req.body);
  return res.status(200).json(dog);
};

const deleteDog = async (req, res) => {
  const { id } = req.params;
  await dogsService.deleteOne(Number(id));
  return res.status(204).end();
};

module.exports = {
  showDog,
  showDogs,
  createDog,
  updateDog,
  deleteDog,
};
