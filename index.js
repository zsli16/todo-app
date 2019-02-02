const express = require('express');
const router = require('./router.js');

const app = express();

app.use(router);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, '127.0.0.1', () => {
  console.log('Server up and running at port 3000');
})



