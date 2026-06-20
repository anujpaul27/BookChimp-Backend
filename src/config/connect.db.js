const mongoose = require("mongoose");
const config = require("./config");

const ConnectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connect to database..");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = ConnectDB;
