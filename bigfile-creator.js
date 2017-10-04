const fs = require('fs');
const file = fs.createWriteStream('./big.file');


for(i=0;i<1e5;i++) {
      file.write('Loren ipsum dolor sit omet, consectetur adipisicing elite\n');
}
file.end();