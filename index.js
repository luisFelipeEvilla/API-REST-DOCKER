const express = require('express')
const db = require('./db/index')
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/signup', (req, res) => {
    const { userName, userPassword, idEvent } = req.body
    console.log(`username: ${userName}, userPassword: ${userPassword}, idEvent: ${idEvent}`);
})

app.listen(3000, () => {
    console.log(`Server it's listenning por port ${PORT}`);
})