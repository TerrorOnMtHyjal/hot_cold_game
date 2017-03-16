const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let guessCountArray = [];
let lowestGuessCount = 0;


app.get('/api/guesses', (req, res) => {
  res.json({guessCountArray, lowestGuessCount});
});

app.post('/api/guesses', jsonParser, (req, res) => {
  let newGuessCount = req.body.newGuessCount;
  guessCountArray.push(newGuessCount);

  if(lowestGuessCount === 0 || newGuessCount.count < lowestGuessCount){
    lowestGuessCount = newGuessCount.count;
  }

  res.json({lowestGuessCount});
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});