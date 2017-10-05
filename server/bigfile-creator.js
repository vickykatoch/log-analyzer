const fs = require('fs');
const file = fs.createWriteStream('./big.file');

file.write('[\n');
for(i=0;i<1e5;i++) {
      file.write('{"time" : "10/09/2017 16:12:25.234", "text" : "HI There, Error Occurred"},\n');
}
file.write(']\n');
file.end();