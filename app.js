const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join('test'), (err) => {
//     console.log(err);
// });

// for (let i = 1; i < 6; i++) {
//     fs.mkdir(path.join('test', `dir${i}`), (err) => {
//         console.log(err);
//     });
//
//     fs.writeFile(path.join('test', `myFile${i}.txt`), `DATA${i}`, (err) => {
//         console.log(err);
//     });
//
// }

// fs.readdir(path.join('test'), {withFileTypes: true}, (err, files) => {
//     console.log(err);
//
//     files.forEach(file => {
//         if (file.isFile()) {
//             console.log(`FILE : ${file.name}`)
//         }else {
//             console.log(`FOLDER : ${file.name}`)
//         }
//     });
//
// });

// fs.mkdir(path.join('test4'), (err) => {
//     console.log(err);
// });

fs.writeFile(path.join('test4', 'tryy.js'), 'DATA TO TRY', (err) => {
    console.log(err);
});
