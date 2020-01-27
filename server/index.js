const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('../public/build'))
const port = 3001

const { read, create, update, deleteMessage } = require('./controllers/messages_controller')


app.get('/api/messages', read)
app.put('/api/messages/:id', update)
app.post('/api/messages', create)
app.delete('/api/messages/:id', deleteMessage)

app.listen(port, () => console.log(`Server running on ye olde porte ${port}`));
