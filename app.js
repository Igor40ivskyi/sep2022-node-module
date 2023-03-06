// const express = require('express');
// const fsService = require('./fs.service.js');
//
// const app = express();
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
//
// const PORT = 5100;
//
// app.listen(PORT, () => {
//     console.log('server has started on port 5100');
// });
//
// app.get('/users', async (req, res) => {
//
//     const users = await fsService.reader();
//     res.json(users);
//
// });
//
// app.get('/users/:userId', async (req, res) => {
//
//     const {userId} = req.params;
//
//     const users = await fsService.reader();
//
//     const user = users.find(user => user.id === +userId);
//
//     if (!user) {
//         res.status(400).json(`user with id : ${userId} not found`);
//     }
//
//     res.json(user);
// });
//
// app.post('/users', async (req, res) => {
//
//     const {name, age, gender} = req.body;
//
//     if (!name || name.length < 2) {
//         res.status(400).json('wrong name');
//     }
//     if (!age || !Number.isInteger(age) || Number.isNaN(age)) {
//         res.status(400).json('wron age');
//     }
//     if (!gender || (gender !== 'male' && gender !== 'female')) {
//         res.status(400).json('wrong gender');
//     }
//
//
//     const users = await fsService.reader();
//
//     const newUser = {
//         id: users[users.length - 1]?.id + 1 || 1,
//         name,
//         age,
//         gender,
//     };
//
//     users.push(newUser);
//
//     await fsService.writer(users);
//
//  res.status(201).json(newUser)
//
// });
//
// app.put('/users/:userId', async (req, res) => {
//
//     const {userId} = req.params;
//
//     const {name, age, gender} = req.body;
//
//     if (name && name.length < 2) {
//         res.status(400).json('wrong name');
//     }
//     if (age && !Number.isInteger(age) || Number.isNaN(age)) {
//         res.status(400).json('wrong age');
//     }
//     if (gender && (gender !== 'male' && gender !== 'female')) {
//         res.status(400).json('wrong gender');
//     }
//
//     const users = await fsService.reader();
//
//     const index = users.findIndex(user => user.id === +userId);
//
//     users[index] = {...users[index], ...req.body};
//
//     await fsService.writer(users);
//
//     res.status(201).json(users[index]);
// });
//
// app.delete('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//
//     const users = await fsService.writer();
//
//     const index = users.findIndex(user => user.id === +userId);
//
//     if (index === -1) {
//         res.status(422).json(`user wit user id : ${userId} not found`);
//     }
//
//     users.splice(index, 1);
//     await fsService.writer();
//
//     res.sendStatus(204);
//
// });


// ================================ findIndex - повертає -1 , якщо нема шуканого елементу ===========

// const arr = [
//     {
//         name: 'vasya',
//         age: 14,
//     },
//     {
//         name: 'dima',
//         age: 16
//     }
// ];
//
// const number = arr.findIndex(user => user.age === 11);
//
// console.log(number);