const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let scoreboard = [{user: "Mousecop", count: 20}, {user: "Jared", count: 10}, {user: "Joe", count: 2}];
let lowestGuessCount = 0;


app.get('/api/guesses', (req, res) => {
  res.json({scoreboard});
});

app.post('/api/guesses', jsonParser, (req, res) => {
  let newGuessCount = req.body.newGuessCount;
  scoreboard.push(newGuessCount);

  if(lowestGuessCount === 0 || newGuessCount.count < lowestGuessCount){
    lowestGuessCount = newGuessCount.count;
  }

  res.json({scoreboard});
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});