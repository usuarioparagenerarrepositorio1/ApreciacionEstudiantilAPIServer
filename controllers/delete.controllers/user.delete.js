const User = require('../../models/user.model'),
  Result = require('../../models/result.model')

let deleteUser = (req, res) => { 
  const { id } = req.params
  User.findById(id).exec((err, user) => {
    if (err) throw err
    console.log(user)
    Result.findByIdAndUpdate('5d06d6f61c9d440000c5c7f6', {
      $inc: {
        'result.0': user.result[0] * -1,
        'result.1': user.result[1] * -1,
        'result.2': user.result[2] * -1,
        'result.3': user.result[3] * -1,
        'result.4': user.result[4] * -1,
        'result.5': user.result[5] * -1,
        'result.6': user.result[6] * -1,
        'result.7': user.result[7] * -1,
        'result.8': user.result[8] * -1,
        'result.9': user.result[9] * -1,
        quantity: -1
      }
    }).exec((err) => {
      if (err) throw err
      User.deleteOne({ _id: id }).exec((err) => {
        if (err) throw err
        return res.send()
      })
    })
  })
}

module.exports = {
  deleteUser
}