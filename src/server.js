const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', function (req, res) {
  const pathToIndex = path.join(__dirname, 'views', 'index.html');
  console.log(__dirname);
  res.sendFile(pathToIndex);
});

app.listen(PORT, () => console.log('listening on port', PORT));
