const List = require('../models/List');

class DeleteController {
    async delete(req, res) {
        const { id } = req.params;

        for (let i = 0; i < List.length; i++) {
            if (List[i].id == id) {
                List.splice(i, 1);
            }
        }

        return res.json(List);
    }
}

module.exports = new DeleteController();