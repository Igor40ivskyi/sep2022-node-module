const express = require('express');
const fsService = require('./fs.service.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 5100;

app.listen(PORT, () => {
    console.log('server has started on port 5100');
});

app.get('/users', async (req, res) => {

    const users = await fsService.reader();
    res.json(users);

});

app.post('/users', async (req, res) => {

    const {name, age, gender} = req.body;

    if (!name || name.length < 2) {
        res.status(400).json('wrong name');
    }
    if (!age || !Number.isInteger(age) || Number.isNaN(age)) {
        res.status(400).json('wron age');
    }
    if (!gender || (gender !== 'male' && gender !== 'female')) {
        res.status(400).json('wrong gender');
    }


    const users = await fsService.reader();

    const newUser = {
        id: users[users.length - 1]?.id + 1 || 1,
        name,
        age,
        gender,
    };

    users.push(newUser);

    await fsService.writer(users);

 res.status(201).json(newUser)

});