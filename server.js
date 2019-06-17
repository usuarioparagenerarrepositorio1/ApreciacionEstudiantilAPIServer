const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const c = console.log
const ce = console.error

app
  .set('port', process.env.PORT || 3000)
  .set('connecturi', 'mongodb+srv://admin:admin@clusterprojects-e96mt.mongodb.net/apreciacion-estudiantil?retryWrites=true')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Entrada principal')
})

app.use(require('./routes'))

mongoose.Promise = global.Promise

mongoose.connect(app.get('connecturi'), { 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useCreateIndex: true 
})
  .then(db => c(`Conectado a la Base de Datos Version ${db.version}`))
  .catch(err => ce(err))

app.listen(app.get('port'), () => {
  c(`Aplicacion Ejecutandose en el Puerto ${app.get('port')}`)
})