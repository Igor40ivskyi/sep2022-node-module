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

        if (users.length) {
        res.json(users);

        }else {
            res.json('NO USERS PRESENT')
        }


    });

});

app.post('/users', (req, res) => {

    const newUser = req.body;
    const nameTypeofCheck = typeof (newUser.name);
    const nameLengthCheck = newUser.name.length;
    const ageTypeofChek = typeof (newUser.age);
    const ageChek = newUser.age;
    const genderCheck = newUser.gender;

    if (nameTypeofCheck === "string" && nameLengthCheck >= 2 && ageTypeofChek === "number" &&
        ageChek >= 0 && genderCheck === 'male' || genderCheck === 'female' || genderCheck === 'mixed'
    ) {

        fs.readFile(path.join('bdUsers.json'), (err, data) => {
            const users = JSON.parse(data);
            users.push(newUser);

            const usersArr = JSON.stringify(users);

            fs.writeFile(path.join('bdUsers.json'), usersArr, (err, data) => {
            });
        });
       return res.json('user created ');
    }

    res.json('invalid user data ')

});

app.put('/users/:userId', (req, res) => {

    const {userId} = req.params;

    const newUser = req.body;
    const nameTypeofCheck = typeof (newUser.name);
    const nameLengthCheck = newUser.name.length;
    const ageTypeofChek = typeof (newUser.age);
    const ageChek = newUser.age;
    const genderCheck = newUser.gender;

    fs.readFile(path.join('bdUsers.json'), (err, data) => {

        const usersArr = JSON.parse(data.toString());

        if (nameTypeofCheck === "string" && nameLengthCheck >= 2 && ageTypeofChek === "number" &&
            ageChek >= 0 && genderCheck === 'male' || genderCheck === 'female' || genderCheck === 'mixed' &&
            typeof (+userId) === 'number' && +userId > 0 && +userId - 1 <= usersArr.length
        ) {

            fs.readFile(path.join('bdUsers.json'), (err, data) => {

                const usersArr = JSON.parse(data.toString());

                usersArr[+userId - 1] = updatedUser;

                const usersJSONArr = JSON.stringify(usersArr);

                fs.writeFile(path.join('bdUsers.json'), usersJSONArr, (err, data) => {
                    console.log(err);
                });
            });

            return res.json('user UPDATED !')
        }

        res.json('invalid user data or no such user');
    });

});


app.delete('/users/:userId', (req, res) => {

});