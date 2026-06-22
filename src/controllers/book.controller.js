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
      return  res.status(400).json({
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

async function deleteBookById (req,res)
{
  try 
  {
    const id = await req.params.id; 
    const book = await bookModel.deleteOne({_id: id})
    res.status(200).json({
      message: 'Book Delete Successful.'
    })
  }
  catch (err)
  {
    res.status(500).json ({
      message: err.message 
    })
  }
}

// get the books by bookId 
async function getTheBookById (req,res)
{
  try
  {
    const id = await req.params.id;
    const book = await bookModel.findOne({_id: id})
    res.status(200).json({
      success: true,
      data: book
    })
  }
  catch (err)
  {
    res.status(500).json({
      message: err.message 
    })
  }

}

module.exports = { 
  createBook, 
  getTheAllBook, 
  getBookForLibrary,
  deleteBookById,
  getTheBookById
};
