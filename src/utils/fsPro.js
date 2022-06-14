const fs = require('fs');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("Data not found");
            resolve(data);
        })
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(false);
            resolve(true);
        })
    });
}

module.exports = { readFilePro, writeFilePro };