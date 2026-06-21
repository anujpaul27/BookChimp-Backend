const express = require('express')
const bookRouter = require('./routers/book.router')
const app = express()
const cors = require('cors')


// middleware
app.use(express.json())
app.use(cors())


// routes 
app.use('/book', bookRouter)

app.get('/', (req,res)=> {
    res.send('Server is running!.')
})

module.exports = app
