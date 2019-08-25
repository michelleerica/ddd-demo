
const express = require('express');
const bodyParser = require('body-parser');
const foodMenu = require('./data/foodMenu');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.head('/', (req, res) => res.status(200).send());

app.all('/menu', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.status(200).send(foodMenu);
});

app.all('/graphql', (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');

  if (req.body.query) {
    if (req.body.query.includes('appetizer')) {
      res.status(200).send('appetizers');
    } else if (req.body.query.includes('mains')) {
      res.status(200).send('mains');
    } else if (req.body.query.includes('desserts')) {
      res.status(200).send('desserts');
    }
  } else {
    res.status(200).send({});
  }
});

module.exports = app;
