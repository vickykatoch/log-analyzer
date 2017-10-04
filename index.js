const fs = require('fs');
const server = require('http').createServer();
const readline = require('readline');


server.on('request', (req, res) => {
      let ctr = 0;
      const lineReader = readline.createInterface({
            input: fs.createReadStream('./big.file')
      });
      lineReader.on('line', (line)=> {
            console.log('Line# : ', ctr);
            res.write(line);
            ctr++;
      }).on('close', ()=> {
            console.log('End triggered');
            res.end();
      });
});

server.listen(8000);