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


async function getTheAllBook (req,res)
{
  const allBook = await bookModel.find({})
  res.status(200).json({
    success: true,
    data: allBook
  })
}

module.exports = {createBook,getTheAllBook}

