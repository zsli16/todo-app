const express = require('express');
const router = require('./router.js');

const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index'));

app.use(router);

app.listen(3000, '127.0.0.1', () => {
  console.log('Server up and running at port 3000');
});



