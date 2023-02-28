const fs = require('fs');
const path = require('path');

fs.mkdir(path.join('test'), (err) => {
    console.log(err);
});
