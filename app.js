// const fs = require('node:fs/promises');
// const path = require('node:path');

// const worker = async () => {
//     try {
//         const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
//         const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];
//
//         for (const folderName of folderNames) {
//             await fs.mkdir(path.join(process.cwd(), folderName),{recursive:true});
//         }
//         for (const fileName of fileNames) {
//             await fs.writeFile(path.join(process.cwd(),fileName),'HELLO WORLD')
//         }
//
//     }catch (e) {
//         console.error(e.message);
//     }
//
// };
//
// worker().then();








// ======================= PLAYING WITH =====================

// const maker = async () => {
//
//    await fs.mkdir(path.join('folder3', 'folder4'), {recursive: true});
// };
//
// maker().then();


// const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
//
// const changedFileNames = fileNames.map(file => `ddd${file}`);
//
// console.log(changedFileNames);

// =======


// const readder = async () => {
//
//     const res = await fs.readdir(path.join('folder2'));
//     // console.log(res);
//
//     const stat = await fs.stat(path.join('folder1'));
//     console.log(stat.isFile());
// };
//
// readder();

// const fs = require('node:fs/promises');
// const path = require('path');
//
// const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
//
//
// const res = fileNames.map(async (file) => {
//
// return 'ppp'
// });
//
// let promise = Promise.all(res);
// promise.then(data=> console.log(data))

// const res = fileNames.map(file => {
//     return ddd = `ddd${file}`;
// });
//
// console.log(res);
