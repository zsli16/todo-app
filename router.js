const express = require('express');

const router = express.Router();

router.get('/', function (req, res){
  let todos = ctrl.showTodos();
  res.send(todos);
});

router.post('/', function (req, res){
  ctrl.addtodo(req);
  res.statusCode = 200;
});

module.exports = router;