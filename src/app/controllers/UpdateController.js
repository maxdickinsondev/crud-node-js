const List = require('../models/List');

class UpdateController {
    async update(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        
      for (let i = 0; i < List.length; i++) {
          if (List[i].id == id) {
              List[i].title = title;
          }
      }

        return res.json(List);
    }
}

module.exports = new UpdateController();
