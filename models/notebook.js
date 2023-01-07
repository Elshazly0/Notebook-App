const mongoose = require('mongoose');


const notebookSchema = new mongoose.Schema({

    Id: {
        type: String,
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Priority: {
        type: Number,
        unique: true,
        required: true
    },
    Image: {
        type: String,

    }


})


module.exports = mongoose.model('Notebook', notebookSchema)


