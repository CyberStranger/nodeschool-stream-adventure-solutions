const fs = require('fs');

const file = process.argv[2];

try {
    fs.createReadStream(file).pipe(process.stdout);
} catch (error) {
    console.log('something wrong');
}
