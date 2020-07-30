let mockData = {
    code: 20000,
    data: {
      total: 20,
      items: [
        {
          order_no: Math.random().toString(36).substr(2),
          //timestamp: +Mock.Random.date('T'),
          username: Math.random().toString(36).substr(2),
          price: Math.round(Math.random()*10000),
          status: 'success'
        },
        {
          order_no: Math.random().toString(36).substr(2),
          //timestamp: +Mock.Random.date('T'),
          username: Math.random().toString(36).substr(2),
          price: Math.round(Math.random()*10000),
          status: 'pending'
        }
      ]
    }
}


function transactionList(req, res) {
  res.send(mockData)
}

module.exports = { transactionList }
