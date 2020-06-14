const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

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

function info(req, res) {
  // get user info
  console.log('get info!!!!')
  const { token } = req.query
  const userInfo = users[token]

  if (!userInfo) {
    res({
      code: 50008,
      message: 'Login failed, unable to get user details.'
    })
  }

  res.send({
    code: 20000,
    data: userInfo
  })
}

module.exports = { login, info, tokens }
