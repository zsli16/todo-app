const db = require('./db');

exports.showtasks = (req, res) => {
  const savedTasks = db.database.collection('tasks').find().toArray().then(tasks => {
    const body = tasks.map((task) => {
      // return !task.status ? `<li>${task.todo}</li>` : '';
      return `<li>${task.todo}</li>`;
    });
    res.send(`<ol>${body.join('')}</ol>`);
  });
  console.log(savedTasks);
}

exports.addtask = async (req, res) => {
  // const parsed = JSON.parse(req.body);
  const newtask = await db.database.collection('tasks').insert({
    todo: req.body.newtask,
    status: false,
  });
  res.send(newtask.ops[0]);
} 

