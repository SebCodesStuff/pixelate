const express = require('express')
var cors = require('cors')
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);
const app = express()
const bodyParser  = require("body-parser");
const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(knex)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/canvas', (req, res) => {
    knex.select().table('canvas')
    .then(result => {
        console.log(result)
        res.send(result)
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})