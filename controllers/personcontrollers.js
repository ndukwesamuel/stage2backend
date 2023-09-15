const Personmodel = require("../models/Person");
const { StatusCodes } = require("http-status-codes");

const CustomError = require("../errors");

// CREATE: Adding a new person
const createPerson = async (req, res) => {
  const newperson = await Personmodel.create(req.body);
  res.status(StatusCodes.CREATED).json({ newperson });
};

const getAllPersons = async (req, res) => {
  const Persons = await Personmodel.find({});
  res.status(StatusCodes.OK).json({ count: Persons.length, Persons });
};

const getSinglePerson = async (req, res) => {
  const { user_id } = req.params;
  const singleperson = await Personmodel.findOne({ _id: user_id });
  if (!singleperson) {
    throw new CustomError.NotFoundError(`No person with id : ${user_id}`);
  }
  res.status(StatusCodes.OK).json(singleperson);
};

const updategetSinglePerson = async (req, res) => {
  const { user_id } = req.params;

  const singleperson = await Personmodel.findOneAndUpdate(
    { _id: user_id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!singleperson) {
    throw new CustomError.NotFoundError(`No person with id : ${user_id}`);
  }

  res.status(StatusCodes.OK).json({ singleperson });
};

const DeleteSinglePerson = async (req, res) => {
  const { user_id } = req.params;

  const person = await Personmodel.findByIdAndRemove({ _id: user_id });

  if (!person) {
    throw new CustomError.NotFoundError(`No product with id : ${user_id}`);
  }

  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};

module.exports = {
  createPerson,
  getAllPersons,
  getSinglePerson,
  updategetSinglePerson,
  DeleteSinglePerson,
};
