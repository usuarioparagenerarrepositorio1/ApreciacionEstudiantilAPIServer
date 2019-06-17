const Result = require('../../models/result.model')

let getResults = (req, res) => { 
  Result.findOne((err, result) => {
    if (err) throw err
    console.log(result)
    res.json(result)
  })
}

module.exports = {
  getResults
}