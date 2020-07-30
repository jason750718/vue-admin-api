const data = require('../controllers/data')
const user = require('../controllers/user')
const transaction = require('../controllers/transaction')

module.exports = function getData(app) {
  app.route('/fetch').get(data.fetchList)

  //app.router.use('/user', user)
  app.route('/user/login').post(user.login)
  app.route('/user/info').get(user.info)
  app.route('/user/logout').post(user.logout)

  app.route('/transaction/list').get(transaction.transactionList)

  // todoList Routes
  // app.route('/tasks')
  //     .get(todoList.list_all_tasks)
  //     .post(todoList.create_a_task);

  // app.route('/tasks/:taskId')
  //     .get(todoList.read_a_task)
  //     .put(todoList.update_a_task)
  //     .delete(todoList.delete_a_task);
}
