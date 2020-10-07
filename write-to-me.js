const { read } = require('fs');
const { Writable, Readable } = require('stream');


const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('writing: ' + chunk.toString());
        callback();
    }
  });
  
  process.stdin.pipe(outStream);

  //oficial solution :
  
//   const { Writable } = require('stream')

//   class MyWritable extends Writable {
//     _write (chunk, encoding, callback) {
//       console.log(`writing: ${chunk.toString()}`)
//       callback()
//     }
//   }

//   const stream = new MyWritable()
//   process.stdin.pipe(stream)