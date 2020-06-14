const { urlencoded, json } = require('body-parser')

const express = require('express')
const routes = require('./api/routes/dataRoute')
const user = require('./api/routes/userRoute')

const app = express()
const port = process.env.PORT || 3000

app.use(urlencoded({ extended: true }))
app.use(json())

app.use((req, res, next) => {
  // 因為原作在 src/utils/request.js 第 22 行有加入 X-Token
  // Access-Control-Allow-Headers 加入 X-Token
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Accept, Content-Type, Cookie, X-Token'
  )

  // 設定為前端服務的IP:Port
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH'
  )

  // src/utils/request.js 第 9 行 開啟｀
  // withCredentials: true
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

routes(app)
user(app)

app.listen(port)
console.log(`Vue element admin RESTful API server started on: ${port}`)
