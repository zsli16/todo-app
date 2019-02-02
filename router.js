const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const ctrl = require('./controller.js');

router.get('/todo', ctrl.showtasks);

router.post('/addtask', ctrl.addtask);

module.exports = router;