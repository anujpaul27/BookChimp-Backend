const express = require('express')
const { getTheAllUserFromBetterAuth, changeUserRole, deleteUser } = require('../controllers/user.controller')
const userRouter = express.Router()
const userMiddleware = require('../middleware/user.middleware')

userRouter.get('/all-users',userMiddleware.verifyToken, getTheAllUserFromBetterAuth )
userRouter.patch('/change-role/:id',userMiddleware.verifyToken, changeUserRole) 
userRouter.delete('/delete/:id', deleteUser)

module.exports = userRouter