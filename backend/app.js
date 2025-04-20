const express = require('express');
const app = express();
require('dotenv').config();
const inventoryTable = require('./models/inventory');
const db = require('./config/database');
const cors = require('cors');




app.use(express.json());



db.sync().then(()=>{
    console.log("database connected successfully");
    console.log(`Server is running on port ${process.env.PORT}`);
}).catch((err)=>{
    console.error("error at connecting to database: ", err);
})