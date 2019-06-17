const Result = require('../../models/result.model')
const User = require('../../models/user.model')

let putResultUser = (req, res) => {
  let { body } = req
  console.log('body', body)

  let resultShow

  Result.findByIdAndUpdate('5d06d6f61c9d440000c5c7f6', {
    $inc: {
      'result.0': body.result[0],
      'result.1': body.result[1],
      'result.2': body.result[2],
      'result.3': body.result[3],
      'result.4': body.result[4],
      'result.5': body.result[5],
      'result.6': body.result[6],
      'result.7': body.result[7],
      'result.8': body.result[8],
      'result.9': body.result[9]
    }
  })
  .exec((err, result) => {
    if (err) throw err

    resultShow = result
    User.findOneAndUpdate({ _id: body._id }, { 
      result: body.result, status: true 
    })
    .exec((err, result) => {
      if (err) throw err
      console.log(resultShow)
      return res.json(resultShow)
    })
  })
}

module.exports = {
  putResultUser
}