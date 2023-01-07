const NotebookService = require('../service/notebook');
const notebookService = new NotebookService();
const fs = require('fs');


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

    async getNotebooksSorted(req, res, next) {
        const id = await req.params.id;
        console.log(id)
        const result = await notebookService.getNotebooksSorted(id);

        if (result) {
            res.send(result);

        } else {

            res.send("error")
        }

    }

    async createNotebook(req, res, next) {
        let notebook = req.body;

        const JsonFile = fs.readFileSync('./noteBook.json', 'utf8');
        const JSONData = JSON.parse(JsonFile);
        JSONData.push(notebook);



        if (req.file) {
            notebook['Image'] = req.file.path

        }
        //    console.log(notebook)

        const result = await notebookService.createNotebook(notebook)

        if (result) {
            res.send(result) && fs.writeFileSync('./noteBook.json', JSON.stringify(JSONData), 'utf8');;

        } else {

            res.send("error")
        }



    }




    async putNotebook(req, res, next) {
        const id = await req.params.id;
        const data = await req.body

        const result = await notebookService.putNotebook(id, data);

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