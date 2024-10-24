const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bedding = require('./app/data');
const port = 3000;

app.use(express.static('public'));
app.use('/src', express.static('src'));
app.use('/app', express.static('app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/shop', (req, res) => {
  res.sendFile(__dirname + "/shop.html");
});

app.get('/bedding', (req, res) => {  
  res.json(bedding);
});

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});