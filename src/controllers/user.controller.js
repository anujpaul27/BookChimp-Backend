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




module.exports = {
    getTheAllUserFromBetterAuth,
    
}