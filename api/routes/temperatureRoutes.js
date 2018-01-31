'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/temperatureController');

  app.route('/add')
    .post(todoList.add_temperature);

  app.route('/get')
    .get(todoList.list_all_temperatures);

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};