const express = require('express')
const router = express.Router()

const { userLogin, userRegister } = require('../controllers/post.controllers/user.post')

router
  .get('/docentes', (req, res) => {
    res.send('Docentes')
  })

router
  .post('/user/login', userLogin)
  .post('/user/register', userRegister)

module.exports = router 