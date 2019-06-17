const User = require('../../models/user.model')
const Result = require('../../models/result.model')

let userLogin = (req, res) => {
  let { body } = req

  User.findOne({ username: body.username })
    .then(user => {
      if ( user.password === body.password) {
        res.json(user)
      } else {
        res.send(`No eres ${user.name}`)
      }
    })
    .catch(err => res.send(err.message))
}



let userRegister = (req, res) => {
  let { body } = req

  body.result = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

  let userRegister = new User(body)
  let userSuccess
  userRegister.save()
    .then(user => {
      userSuccess = user 
      return Result.findByIdAndUpdate('5d06d6f61c9d440000c5c7f6', { $inc: {quantity: 1 } } )
    })
    .then(() => {
      console.log(userSuccess)
      return res.json(userSuccess)
    })
    .catch(err => {
      console.error(err)
      res.send(err.message)
    })
}


module.exports = {
  userLogin,
  userRegister
}
