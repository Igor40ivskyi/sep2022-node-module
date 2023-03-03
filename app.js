const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const {json} = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = 5100;

app.listen(PORT, () => {
    console.log(`server has started on PORT ${PORT}`);
});



app.get('/users', (req, res) => {

    fs.readFile(path.join('bdUsers.json'), (err, data) => {
        const users = JSON.parse(data);

        res.json(users);

    });

});

app.post('/users', (req, res) => {

    const newUser = req.body;

    fs.readFile(path.join('bdUsers.json'), (err, data) => {
        const users = JSON.parse(data);
        users.push(newUser);

        const usersArr = JSON.stringify(users);

        console.log(usersArr,'USERS ARR');

        fs.writeFile(path.join('bdUsers.json'), usersArr, (err, data) => {
        });
    });

    res.json('user created !');
});

app.put('/users/:userId', (req, res) => {

    const {userId} = req.params;
    const updatedUser = req.body;
    fs.readFile(path.join('bdUsers.json'), (err, data) => {

        const usersArr = JSON.parse(data.toString());

        usersArr[+userId - 1] = updatedUser;

        const usersJSONArr = JSON.stringify(usersArr);

        fs.writeFile(path.join('bdUsers.json'), usersJSONArr, (err, data) => {
            console.log(err);
        });


    });

 res.json('user UPDATED !')
});

app.delete('/users/:userId', (req, res) => {

    const {userId} = req.params;

    fs.readFile(path.join('bdUsers.json'), (err, data) => {

        const usersArr = JSON.parse(data);

        usersArr.splice(+userId - 1, 1);

        const users = JSON.stringify(usersArr);

        fs.writeFile(path.join('bdUsers.json'),users, (err, data) => {

        });
    });

    res.json('user DELETED !')
});




// fs.readFile(path.join('bdUsers.json'), (err, data) => {
//     console.log(data.toString());
//
// });




