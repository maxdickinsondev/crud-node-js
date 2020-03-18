class List {
    constructor() {
        this.list = [
            {
                id: "1",
                title: "Novo projeto",
                tasks: []
            },
            {
                id: "2",
                title: "Novo projeto",
                tasks: []
            },
            {
                id: "3",
                title: "Novo projeto",
                tasks: []
            }
        ];
    }
}

module.exports = new List().list;