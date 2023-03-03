
// ================================================= EVENTS ====================
// const event = require('node:events');
//
// const eventEmitter = new event();

// ==== IMMORTAL
// eventEmitter.on('click', () => {
//     console.log('EVENT CLICK  ');
// });
//
// console.log(eventEmitter.eventNames());
//
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');

// ==== MORTAL
// eventEmitter.once('clickIt', () => {
//     console.log('I AM GONNA DIE AFTER BEING CALLED');
// });
//
// console.log(eventEmitter.eventNames());
//
// eventEmitter.emit('clickIt');
// eventEmitter.emit('clickIt');
// eventEmitter.emit('clickIt');
// eventEmitter.emit('clickIt');
// eventEmitter.emit('clickIt');
// eventEmitter.emit('clickIt');
//
// console.log(eventEmitter.eventNames());


// ========================================= STREAMS ====================
//
// const fs = require('node:fs');
// const path = require('node:path');
//
// const readStream = fs.createReadStream(path.join('text3.txt'));
// const writeStream = fs.createWriteStream(path.join('text2.txt'));
//
//read,write,duples,transform -types of streams

// // readStream.on('data', (chunk) => {
// //     writeStream.write(chunk);
// // });
//
// const handleError = () => {
//     console.error('ERROR!!!');
//     readStream.destroy();
//     writeStream.end('ERROR While reading file !')
//
// };
//
//
// readStream
//     .on('error', handleError)
//     .pipe(writeStream)
//     .on('error', handleError);

// ================= Піднімаємо сервер EXPRESS ===============

// const express = require('express');
//
// const app = express();
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
//
//
// const users = [
//     {
//         name: 'Dima',
//         age: 12,
//         gender: 'male',
//     },
//     {
//         name: 'Anton',
//         age: 20,
//         gender: 'female',
//     },
//     {
//         name: 'Vasya',
//         age: 31,
//         gender: 'male',
//     },
//     {
//         name: 'Anna',
//         age: 28,
//         gender:'female',
//     },
//     {
//         name: 'Kokos',
//         age: 1,
//         gender: 'mixed',
//     }
// ]
//
//
// app.get('/users', (req, res) => {
//     res.json(users);
//
// });
//
// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//
//     const user = users[+userId - 1];
//     res.json(user);
// });
//
// app.post('/users', (req, res) => {
//     const body = req.body;
//
//     users.push(body);
//
//     res.status(201).json({
//         message:'user created !'
//     })
// });
//
// app.put('/users/:userId', (req, res) => {
//
//     const {userId} = req.params;
//
//     const updatedUser = req.body;
//
//     users[+userId -1] = updatedUser;
//
//     res.status(200).json({
//         message:'user updated !',
//         data: users[+userId - 1]
//     })
//
// });
//
// app.delete('/users/:userId', (req, res) => {
//     const userId = req.params;
//
//     users.splice(+userId, 1);
//
//     res.status(200).json({
//         message:'user deleted !'
//     })
// });
//
// app.get('/welcome', (req, res) => {
//     console.log('WELCOME!!!');
//     res.send('WELCOME');
// });
//
//
// const PORT = 5100;
//
// app.listen(PORT, () => {
//     console.log(`server has started on PORT ${PORT}`);
// });

// ========================= Піднімаємо сервер EXPRESS 2 attempt ========

const express = require('express');
const {urlencoded} = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



const users = [
    {
        name: 'Vasya',
        age:31,
        car:'bmw',
        city:'Lviv',
    },
    {
        name: 'Anton',
        age:22,
        car:'Mazda',
        city:'Kyiv',
    },
    {
        name: 'Dima',
        age:33,
        car:'Tavria',
        city:'Kremenchuk',
    },
    {
        name: 'Anna',
        age:33,
        car:'Peugeot',
        city:'Zaporizha',
    },
    {
        name: 'Oleh',
        age:23,
        car:'Volkswagen',
        city:'Drohovyzh',
    },
    {
        name: 'Vlad',
        age:22,
        car:'Slavuta',
        city:'Mykolaiv',
    }
];


app.get('/users', (req, res) => {

    const flag = [];

    if (users.length) {

    res.json(users);
    }else {
        res.send('no users left !')
    }

});

app.get('/welcome', (req, res) => {
    console.log('WELCOME !!!')
    res.send('WELCOME !!!!!!!!!!!!')
});

app.get('/users/:userId', (req, res) => {

    const {userId} = req.params;

    const user = users[+userId - 1];

    res.json(user);

});

app.post('/users', (req, res) => {

    const body = req.body;
    users.push(body);

    res.status(200).json('user created ! ');

});

app.put('/users/:userId', (req, res) => {
    const {userId} = req.params;

    const updatedUser = req.body;

    users[+userId - 1] = updatedUser;

    res.json({
        message: 'user updated !',
        data: users[+userId - 1],
    });
});

app.delete('/users/:userId', (req, res) => {
    const {userId} = req.params;

    const deletedUser = users.splice(+userId -1, 1);



    res.json({
        message: 'userDeleted',
        data: deletedUser
    });



});





const PORT = 5100;
app.listen(PORT, () => {
    console.log(`server has started on PORT ${PORT}`);
});



