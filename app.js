const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');
const app = express();


mongoose.connect(config.database);
const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to the Database');
});

db.on('error', (err) => {
    console.error(err);
});
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',studentRoutes)

//listening ruotes
app.listen(3000,()=>{
    console.log('your server is listening from port 3000')
});
//mi


