
const verifyToken = async (req,res,next) =>
{
    const token = req.headers.authorization;
    console.log(token);

    if (!token)
    {
        return res.status(400).json({
            message: 'User token not found!.'
        })
    }

    next()
}

module.exports = {verifyToken}
    