// var mongoose = require('mongoose'),
//     Task = mongoose.model('Tasks');  //一開始建立的Tasks schema

// 針對不同request的回應(json格式)

let mockData = [
  {
    id: 1,
    type: 'CN',
    author: 'aaa',
    timestamp: '1231312313'
  },
  {
    id: 2,
    type: 'EU',
    author: 'bbb',
    timestamp: '1231312313'
  }
]

function fetchList(req, res) {
  const { page = 1, limit = 20, sort } = req.query

  if (sort === '-id') {
    mockData = mockData.reverse()
  }

  const pageList = mockData.filter((item, index) => {
    return index < limit * page && index >= limit * (page - 1)
  })

  res.send({
    code: 20000,
    data: {
      total: mockData.length,
      items: pageList
    }
  })
}

module.exports = { fetchList }
