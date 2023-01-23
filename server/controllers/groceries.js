const groceriesSchema = require('../schemas/grocery');
const errorWrapper = require('../utils/errorWrapper');
const { createCustomError } = require('../utils/customError');
const { freshOptions } = require('../utils/constants');
const { StatusCodes } = require('http-status-codes');

const getGroceries = errorWrapper(async (req, res, next) => {
  const allGroceries = await groceriesSchema.find({}).sort('category');
  res.status(StatusCodes.OK).send(allGroceries);
});

const getGroceriesSearch = errorWrapper(async (req, res, next) => {
  const searchingQueries = req.query;
  const { sort = '', limit = 10, select, page = 1 } = searchingQueries;

  let multiSelects = select;
  let paginationPage = Number(page);

  const skip = (paginationPage - 1) * limit;

  if (select) {
    multiSelects = select.split(',').join(' ');
  }

  const searchedGroceries = await groceriesSchema
    .find(searchingQueries)
    .skip(skip)
    .limit(limit)
    .select(multiSelects || '')
    .sort(sort);
  
  res.status(StatusCodes.OK).send(searchedGroceries);
});

const getGrocery = errorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const grocery = await groceriesSchema.findOne({ _id: id });

  if (!grocery) {
    return next(createCustomError(`Grocery with id ${id} doesn't exist`, StatusCodes.NOT_FOUND));
  }

  res.status(StatusCodes.OK).send(grocery);
});

const createGrocery = errorWrapper(async (req, res, next) => {
  const body = req.body;

  const grocery = await groceriesSchema.create(body);
  res.status(StatusCodes.CREATED).send(grocery);
});

const updateGrocery = errorWrapper(async (req, res, next) => {
  const { name, ...restBody } = req.body;
  const { id } = req.params;

  const updatedGrocery = await groceriesSchema.findOneAndUpdate({ _id: id }, restBody, freshOptions);

  if (!updatedGrocery) {
    return next(createCustomError(`Grocery with id ${id} doesn't exist`, StatusCodes.NOT_FOUND));
  }

  res.status(StatusCodes.OK).send(updatedGrocery);
});

const deleteGrocery = errorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const deletedGrocery = await groceriesSchema.findOneAndDelete({ _id: id }, freshOptions);

  if (!deletedGrocery) {
    return next(createCustomError(`Grocery with id ${id} doesn't exist`, StatusCodes.NOT_FOUND));
  }

  res.status(StatusCodes.OK).send(deletedGrocery);
});

module.exports = {
  getGroceries,
  getGroceriesSearch,
  getGrocery,
  createGrocery,
  updateGrocery,
  deleteGrocery,
}