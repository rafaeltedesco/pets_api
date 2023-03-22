const { ownerService } = require('../services');

const showOwners = async (req, res) => {
  const owners = await ownerService.findAll();
  return res.status(200).json(owners);
};

const showOwner = async (req, res) => {
  const { id } = req.params;
  const owner = await ownerService.findById(Number(id));
  return res.status(200).json(owner);
};

const createOwner = async (req, res) => {
  const owner = await ownerService.create(req.body);
  return res.status(201).json(owner);
};

const updateOwner = async (req, res) => {
  const { id } = req.params;
  const owner = await ownerService.update(Number(id), req.body);
  return res.status(200).json(owner);
};

const deleteOwner = async (req, res) => {
  const { id } = req.params;
  await ownerService.deleteOne(Number(id));
  return res.status(204).end();
};

module.exports = {
  showOwner,
  showOwners,
  createOwner,
  updateOwner,
  deleteOwner,
};
