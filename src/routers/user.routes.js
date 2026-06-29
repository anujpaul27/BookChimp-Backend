const express = require('express')
const { getTheAllUserFromBetterAuth } = require('../controllers/user.controller')
const userRouter = express.Router()
const userMiddleware = require('../middleware/user.middleware')

userRouter.get('/all-users',userMiddleware.verifyToken, getTheAllUserFromBetterAuth )

module.exports = userRouter