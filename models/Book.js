const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide book title'],
      minlength: 2,
      maxlength: 100,
    },
    author: {
      type: String,
      required: [true, 'Please provide book author'],
      minlength: 2,
      maxlength: 100,
    },
    pages: {
      type: Number,
      required: false,
    },
    publisher: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 100,
    },
    illustrator: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 100,
    },
    published: {
      type: Date,
      required: false,
    },
    ageFrom: {
      type: Number,
      required: false,
    },
    ageTo: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ['on hands', 'coming soon', 'unavailable', 'available', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
