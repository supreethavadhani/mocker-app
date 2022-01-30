const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/v1/weather', (req, res) => {
  res.send({
    "coord": {
        "lon": -123.262,
        "lat": 44.5646
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.37,
        "feels_like": 282.09,
        "temp_min": 281.16,
        "temp_max": 283.41,
        "pressure": 1020,
        "humidity": 78
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.34,
        "deg": 135,
        "gust": 2.24
    },
    "clouds": {
        "all": 100
    },
    "dt": 1642095101,
    "sys": {
        "type": 2,
        "id": 2040223,
        "country": "US",
        "sunrise": 1642088828,
        "sunset": 1642121762
    },
    "timezone": -28800,
    "id": 5720727,
    "name": "Corvallis",
    "cod": 200
})
})

app.get('/v1/hello', (req, res) => {
    res.send({ "Greetings":"Hello world"})
  })

  app.post('/v1/auth', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if(!username || !password){
        res.status(400);
        res.send({"response":"Password or username empty"})
    }
    else{
        res.send({"token":"feUMAexzKk3KfYfbaOn5nlzD9IAa4Ortw9iWeLWl"})
      }
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})