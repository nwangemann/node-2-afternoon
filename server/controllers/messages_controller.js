let id = 0;
let messages = [];

module.exports = {
    create: (req, res, next) => {
        const text = req.body.text;
        const time = req.body.time;
        messages.push({
            id,
            text,
            time
        })
        id++
        res.status(200).send(messages);
    },
    read: (req, res, next) => {
        res.status(200).send(messages)
    },
    update: (req, res, next) => {
        const index = messages.findIndex(elem => {
            return elem.id == req.params.id
        })
        if(index !== -1){
        messages[index].text = req.body.text
        }
        res.status(200).send(messages)
    },
    deleteMessage: (req, res, next) => {
        const index = messages.findIndex(elem => {
            return elem.id == req.params.id
        })
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}