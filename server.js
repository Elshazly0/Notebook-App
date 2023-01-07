const express = require('express');
var cors = require('cors')
const app = express();
const colors = require('colors');
const dotenv = require('dotenv').config();
const config = require('./config/config')
const mongoose = require('mongoose')
const notebookRoute = require('./Routes/notebookRoutes')
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use(express.static('uploads'));
app.use('/notebooks', notebookRoute)


mongoose.set('strictQuery', true);

mongoose.connect(config.connectionString).then(() => {
    console.log("connected to the database")
    app.listen(config.PORT, () => {
        console.log(`app is listening on port ${config.PORT}`);

    });


}).catch(() => {

    console.log("error connecting to the db")
});
