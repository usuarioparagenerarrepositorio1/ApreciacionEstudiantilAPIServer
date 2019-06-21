const express = require('express')
const router = express.Router()

const { getResults } = require('../controllers/get.controllers/result.get')
const { userLogin, userRegister } = require('../controllers/post.controllers/user.post')
const { putResultUser } = require('../controllers/put.controllers/result.put')
const { deleteUser } = require('../controllers/delete.controllers/user.delete')

router
  .get('/results', getResults)

router
  .post('/user/login', userLogin)
  .post('/user/register', userRegister)

router
  .put('/user/result', putResultUser)

router
  .delete('/user/:id', deleteUser)

module.exports = router 