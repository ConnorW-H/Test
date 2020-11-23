'use strict';

const express = require('express');
const packageJson = require('./package.json');
var git = require('git-rev-sync')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Welcome to the Simple API!");
});
app.get('/health', (req, res) => {
  var txt = ("Name: " + packageJson.name + "<br/>" + "Version:" + packageJson.version + "<br/>" + "Git Hash: " + git.long());
  res.send(txt);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);