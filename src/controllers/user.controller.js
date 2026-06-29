const { default: mongoose } = require("mongoose");

const getTheAllUserFromBetterAuth = async (req,res) =>
{
    try
    {
        const userModel = await mongoose.connection.db.collection("user");
        const allUser = await userModel.find({}).toArray()

        res.status(200).json({
            message : 'successful',
            data: allUser
        })
    }
    catch (err)
    {
        res.status(500).json({
            message: err.message
        })
    }
}


const changeUserRole = async (req, res) => {
  try {
    // Get user id from params
    const { id } = req.params;

    // Get new role from body
    const { role } = req.body;

    // Get user collection
    const userCollection = mongoose.connection.db.collection("user");

    // Update user role
    const result = await userCollection.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { role } },
      { returnDocument: "after" } // Return updated document
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "User role updated successfully.",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
    getTheAllUserFromBetterAuth,
    changeUserRole
}