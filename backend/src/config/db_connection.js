const mongoose = require('mongoose');
const { db_url } = require('./index');


const connectDB = async () =>{
    try{
        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Database is Connected!")
    }
    catch (err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
    