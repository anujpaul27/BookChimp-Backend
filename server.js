const app = require('./src/app')
const connectDB = require('./src/config/connect.db')


    connectDB()


app.listen(5000, ()=> {
    console.log('Server is running!.');
})