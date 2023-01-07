const NotebookService = require('../service/notebook');
const notebookService = new NotebookService();


class notebookController {

    async getNotebooks(req, res, next) {
        const reviews = await notebookService.getNotebooks();

        if (reviews) {
            res.send(reviews)

        }
    }


    async getNotebook(req, res, next) {
        const id = await req.params.id;
        console.log(id)
        const result = await notebookService.getNotebook(id);

        if (result) {
            res.send(result);

        } else {

            res.send("error")
        }

    }


    async createNotebook(req, res, next) {
        console.log(req.file)
        let notebook = req.body;
        if (req.file) {
            notebook['Image'] = req.file.path

        }
        console.log(notebook)

        const result = await notebookService.createNotebook(notebook)

        if (result) {
            res.send(result);

        } else {

            res.send("error")
        }

    }

    async deleteNotebook(req, res, next) {
        const id = await req.params.id;
        console.log(id)
        const result = await notebookService.deleteNotebook(id);

        if (result) {
            res.send(result);

        } else {

            res.send("error")
        }

    }

}

module.exports = notebookController;