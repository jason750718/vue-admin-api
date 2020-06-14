const dataList = require('../controllers/dataController')

module.exports = function getData(app) {
  app.route('/fetch').get(dataList.fetchList)

  // todoList Routes
  // app.route('/tasks')
  //     .get(todoList.list_all_tasks)
  //     .post(todoList.create_a_task);

  // app.route('/tasks/:taskId')
  //     .get(todoList.read_a_task)
  //     .put(todoList.update_a_task)
  //     .delete(todoList.delete_a_task);
}
