const express = require('express');
const user_api = require('./api/routes/user_api');
const cors = require('cors');
const connectDB = require('./config/db_connection');


//! create server app
const app = express();


//! Connect Database
connectDB();


//! use cors for cross section data send
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

//! API End Points
app.use('/api/user', user_api);



module.exports = app;