import { tokens } from './userController'

function login(req, res) {
  console.table(req.body)
  const { username } = req.body
  const token = tokens[username]

  if (!token) {
    return {
      code: 60204,
      message: 'Account and password are incorrect.'
    }
  }

  res.send({
    code: 20000,
    data: token
  })
  return true
}

export default login
