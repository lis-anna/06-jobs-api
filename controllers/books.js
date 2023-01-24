const Book = require('../models/Book');
const StatusCodes = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const getAllBooks = async (req, res) => {
  res.send('get all jobs');
};

const getBook = async (req, res) => {
  res.send('get job');
};
const addBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });

  res.json(req.body);
};
const updateBook = async (req, res) => {
  res.send('udpate job');
};
const deleteBook = async (req, res) => {
  res.send('create job');
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
