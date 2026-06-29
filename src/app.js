const express = require('express')
const bookRouter = require('./routers/book.router')
const app = express()
const cors = require('cors')
const router = require('./routers/order.routes')
const userRouter = require('./routers/user.routes')


// middleware
app.use(express.json())
app.use(cors())


// routes 
app.use('/book', bookRouter)
app.use('/cart',router)
app.use('/user',userRouter)

app.get('/', (req,res)=> {
    res.send('Server is running!.')
})

module.exports = app
