const { default: mongoose } = require("mongoose");


const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({
        message: "User token not found!.",
      });
    }

    // get session
    const sessionModel = await mongoose.connection.db.collection("session");
    const findSessionWithToken = await sessionModel.findOne({ token: token });
    if (!findSessionWithToken) {
      return res.status(403).json({
        message: "Token invalid",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {verifyToken}

