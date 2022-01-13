const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', (req, res) => {
  res.send({"cityName":"Corvallis","temperatur":"38.8","unit":"F"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})