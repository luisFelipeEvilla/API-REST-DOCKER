const { APPCENTER } = require('ci-info');
const express = require('express');
const fileUpload = require('express-fileupload');
const csv = require('csvtojson');
const pool = require('./db/index');
const { createUser, getUser, deleteUsers, createUsers } = require('./db/usuarios');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.get('/', async (req, res) => {
    pool.connect((err) => {
        if (err) {
            res.send('nok')
        }

        res.send('ok')
    })
})

app.post('/users', async (req, res) => {
    const { users } = req.files;

    const jsonUsers = await csv().fromFile(users.tempFilePath)

    const results = createUsers(jsonUsers);

    Promise.all(results).then((users) => {
        res.send(users);
    })
})

app.delete('/users', async (req, res) => {
    const result = await deleteUsers();

    result ? res.send("ok") : res.send("nok");
})


app.post('/signin', async (req, res) => {
    const { username, password, eventId } = req.body;

    const result = await getUser(eventId, username, password);

    result ? res.send({ id: result.event_id }) : res.send("nok");
})


app.post('/signup', async (req, res) => {
    const { username, password, eventId } = req.body;

    const result = await createUser(eventId, username, password);

    result ? res.send("ok") : res.send("nok");
})

app.listen(3000, () => {
    console.log(`Server it's listenning por port ${PORT}`);
})