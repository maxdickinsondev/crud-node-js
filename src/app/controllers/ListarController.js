const List = require('../models/List');

class ListarController {
    async index(req, res) {
        const projects = await List;

        return res.json(projects);
    }
}

module.exports = new ListarController();