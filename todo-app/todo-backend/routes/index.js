const express = require('express');
const { getAsync } = require('../redis');

const router = express.Router();

const configs = require('../util/config');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (req, res) => {
  const todoCount = Number(await getAsync('todo-count')) || 0;
  res.status(200).json({ added_todos: todoCount });
});

module.exports = router;
