const fs = require('node:fs/promises');
const path = require('node:path');

const worker = async () => {
try {
    const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
    const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];

    const promises = (folderNames.map(async (folderName, index) => {
        const folderPath = path.join(process.cwd(), folderName);

        await fs.mkdir(folderPath, {recursive: true})
        await fs.writeFile(path.join(folderPath, fileNames[index]), 'GELLO WORK');


    }));

    await Promise.all(promises);

    const files = await fs.readdir(path.join(process.cwd()));
    for (const file of files) {
        const stats = await fs.stat(path.join(process.cwd(), file));
        const isFile = stats.isFile();
        if (isFile) {
            console.log('This is file :', stats.name);
        }else{
            console.log('This is folder :', stats.name);
        }

    }

}catch (e) {

console.error(e.message)
}


};

worker().then();














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
