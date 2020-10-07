const { Readable } = require("stream");

const readableStream = new Readable({
    read(size) {
        this.push(process.argv[2]);
        this.push(null)
    }
});



readableStream.pipe(process.stdout)


/* OFICIAL SOLUTION */

// const { Readable } = require('stream')

// class ReadableStream extends Readable {
//   _read (size) {
//   }
// }

// const stream = new ReadableStream(process.argv[2])
// stream.push(process.argv[2])
// stream.pipe(process.stdout)