const express = require('express');
const app = express();
require('dotenv').config();
const inventoryTable = require('./models/inventory');
const db = require('./config/database');
const cors = require('cors');
const inventoryRoutes = require('./routes/inventoryRoutes');





app.use(express.json());
app.use(cors());
app.use('/api/inventory', inventoryRoutes);




db.sync().then(()=>{
    console.log("database connected successfully");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err)=>{
    console.error("error at connecting to database: ", err);
})