
const mongoose = require('mongoose')

// my connection URI
const MONGO_URI = 'mongodb://localhost:27017/myapp'
//connecting to DB 
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(console.log('connected to DB')).catch(err => console.log(err))
}
module.exports = connectDB