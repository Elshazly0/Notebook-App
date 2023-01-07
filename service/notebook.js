const notebookModel = require('../models/notebook')

class notebookService {


    async getNotebooks() {
        return await notebookModel.find({});
    }

    async getNotebook(id) {
        return await notebookModel.findOne({ id });
    }


    async createNotebook(notebook) {

        const Result = new notebookModel(notebook);
        return await Result.save();

    }


    async deleteNotebook(id) {
        return await notebookModel.findOneAndDelete({ id });
    }

}



module.exports = notebookService;