const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const https = require('https');
const mime = require('mime');

const server = http.createServer();

server.listen(8080, 'localhost', 0, () => {
  console.log('Listen on port 8080');
});

server.on('request', (request, response) => {
  let filePath = path.join(__dirname, decodeURI(request.url));
  response.setHeader('X-Powered-By', 'OpenPress');
  response.setHeader('Content-Language', 'en');
  response.setHeader('Cache-Control', 'no-cache');
  response.setHeader('Content-Type', mime.lookup(filePath));
  console.log(response.getHeaders());
  fs.stat(filePath, (err, stats) => {
    if (err) {
      response.end(err.toString());
      return;
    }
    if (stats.isFile()) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          response.end(err.toString());
          return;
        }
        response.write(data);
        response.end();
      });
      return;
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          response.end(err.toString());
          return;
        }
        response.write(`${request.url}\n`);
        for (let file of files) {
          response.write(`\t/${file}\n`);
        }
        response.end();
        return;
      });
      return;
    } else {
      response.end(err.toString());
      return;
    }
  });
});
