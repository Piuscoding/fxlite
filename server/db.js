const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://pius1:pius123@webdevelopment.xav1dsx.mongodb.net/masitrade')
        console.log(`Database connection ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;
