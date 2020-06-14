const user = require('../controllers/userController')

module.exports = function getUser(app) {
  app.route('/user/login').post(user.login)
  app.route('/user/info').get(user.info)
}
