const bookModel = require("../models/book.model");

async function createBook(req, res) {
  try {
    const newBook = new bookModel(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({ success: true, data: savedBook });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}


async function getTheAllBook(req, res) {
  const allBook = await bookModel.find({});
  res.status(200).json({
    success: true,
    data: allBook,
  });
}

async function getBookForLibrary(req, res) {
  try {
    const id = await req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Library id not found!.",
      });
    }

    const books = await bookModel.find({ librarianId: id });
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function deleteBookById(req, res) {
  try {
    const id = await req.params.id;
    const book = await bookModel.deleteOne({ _id: id });
    res.status(200).json({
      message: "Book Delete Successful.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

// get the books by bookId
async function getTheBookById(req, res) {
  try {
    const id = await req.params.id;
    const book = await bookModel.findOne({ _id: id });
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

// update book status from the admin panel
async function updatePendingStatus(req, res) {
  try {
    const { id } = await req.params;
    const updateBook = await bookModel.findOneAndUpdate(
      { _id: id },
      { $set: { status: "Approved" } },
    );

    res.status(200).json({
      success: true,
      message: "Book Update Successful.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

// get the all pending book for the permission from admin panel
async function getThePendingBookForPermission(req, res) {
  try {
    const books = await bookModel.find({ status: "Pending" });
    res.status(200).json({
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function getThePendingBookSpecificLib(req, res) {
  try {
    const {id} = await req.params
    const books = await bookModel.find({ status: "Pending" , librarianId: id });
    res.status(200).json({
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

// Unpublish books 
async function bookUnpublish(req, res) {
  try {
    const { id } = await req.params;
    const updateBook = await bookModel.findOneAndUpdate(
      { _id: id },
      { $set: { status: "Unpublish" } },
    );

    res.status(200).json({
      success: true,
      message: "Book Unpublish Successful.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  createBook,
  getTheAllBook,
  getBookForLibrary,
  deleteBookById,
  getTheBookById,
  updatePendingStatus,
  getThePendingBookForPermission,
  getThePendingBookSpecificLib,
  bookUnpublish
};
