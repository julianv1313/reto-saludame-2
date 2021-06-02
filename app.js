const express = require('express');
const app = express();

/*app.get('/user/:name', (req, res) => {
    res.send('Hola ' + req.params.name);
  })*/

app.get('/makers/:name', (req, res) => {
    res.send(`<h1>Hola  ${req.params.name.charAt().toUpperCase() + req.params.name.slice(1)}!</h1>`);
  });

app.listen(3000, () => console.log('Listening on port 3000!'));
