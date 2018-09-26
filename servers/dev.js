const express = require('@feathersjs/express');
const path = require('path');
const fs = require('fs');
const https  = require('https');

const app = express();
const PORT = 5000.

const publicPath = path.resolve(__dirname, "../build");

var options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert'),
};

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(publicPath, './index.html'));
});

const server = https.createServer(options, app).listen(PORT);

server.on('listening', () => console.log(`Feathers application running at https://localhost:${PORT}`));
