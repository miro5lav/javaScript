import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('/', function(req, res) {
  res.sendFile( path.join(__dirname, '../dist/index.html'));
})

app.get('/users', function(req,res) {
  res.json([
    {"id":1, "firstName": "John", "lastName": "Rambo", "email": "rambo@gmail.com"},
    {"id":2, "firstName": "John", "lastName": "Rambo", "email": "rambo@gmail.com"},
    {"id":3, "firstName": "John", "lastName": "Rambo", "email": "rambo@gmail.com"}
  ]);
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);

  } else {
    open ('http://localhost:' + port )
  }
});
