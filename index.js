const express = require('express')
const { createUser, getUser, deleteUsers } = require('./db/usuarios');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.delete('/users', async (req, res) => {
    const result = await deleteUsers();
    
    result ? res.send("ok") : res.send("nok");
})

app.post('/signin', async (req, res) => {
    const { username, password, eventId } = req.body;
    
    const result = await getUser(eventId, username, password);
    
    result ? res.send({id: result.event_id}) : res.send("nok");
})


app.post('/signup', async (req, res) => {
    const { username, password, eventId } = req.body;
    
    const result = await createUser(eventId, username, password);
    
    result ? res.send("ok") : res.send("nok");
})

app.listen(3000, () => {
    console.log(`Server it's listenning por port ${PORT}`);
})