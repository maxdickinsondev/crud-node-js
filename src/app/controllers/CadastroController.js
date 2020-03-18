const List = require('../models/List');

class CadastroController {
    async store(req, res) {
        const { id, title, tasks } = req.body;

        List.push({
            id,
            title,
            tasks
        });

        return res.json(List);
    }
}

module.exports = new CadastroController();