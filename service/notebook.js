const notebookModel = require('../models/notebook')

class notebookService {


    async getNotebooks() {
        return await notebookModel.find({});
    }

    async getNotebook(id) {
        return await notebookModel.findById(id);
    }

    async getNotebooksSorted(id) {
        const result = await notebookModel.find({});

        function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        return sortByKey(result, id);
    }


    async createNotebook(notebook) {

        const Result = new notebookModel(notebook);


        return await Result.save();
    }


    async deleteNotebook(id) {
        return await notebookModel.findByIdAndDelete(id);
    }


    async putNotebook(id, data) {

        return await notebookModel.findById(id)
            .then((note) => {
                if (note) {
                    note.set(data);
                    console.log(note)

                    return note.save()

                } else {
                    return res.status(404).json({ message: 'not found' });
                }
            })
    }


}



module.exports = notebookService;