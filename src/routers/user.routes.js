const express = require('express')
const { getTheAllUserFromBetterAuth, changeUserRole } = require('../controllers/user.controller')
const userRouter = express.Router()
const userMiddleware = require('../middleware/user.middleware')

userRouter.get('/all-users',userMiddleware.verifyToken, getTheAllUserFromBetterAuth )
userRouter.patch('/change-role/:id',userMiddleware.verifyToken, changeUserRole) 

module.exports = userRouter