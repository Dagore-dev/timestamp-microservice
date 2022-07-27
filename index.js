// index.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT ?? '3000'

// utils functions
const getCurrentDateObj = require('./utils/getCurrentDateObj')
const getDateObj = require('./utils/getDateObj')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 }))// some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' })
})

app.get('/api/', (request, response) => {
  const obj = getCurrentDateObj()
  response.json(obj)
})

app.get('/api/:date', (request, response) => {
  const { date } = request.params

  const obj = getDateObj(date)
  response.json(obj)
})

// listen for requests :)
const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
