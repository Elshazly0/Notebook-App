const express = require('express');
const NotebookController = require('../Controller/notebook');
const notebookController = new NotebookController();
const multer = require("multer")

const router = express.Router();
//const reviewValidator = require('../validation/review')
//const { validate } = require('express-validation');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }


}

const upload = multer({ storage: storage, fileFilter: fileFilter })



router.get('/', notebookController.getNotebooks);


router.get('/:id', notebookController.getNotebook);

router.get('/sorted/:id', notebookController.getNotebooksSorted);



router.put('/:id', notebookController.putNotebook)

router.post('/', upload.single('Image'), notebookController.createNotebook)
router.delete('/:id', notebookController.deleteNotebook)



module.exports = router;