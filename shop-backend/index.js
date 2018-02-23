const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.argv[2] || 8080

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cart = []
let userName = ''

app.post('/shop', (req, res) => {
    cart.push(req.body)
})

app.get('/shop', (req, res) => {
    res.json(cart)
})


app.listen(port, () => {
    console.log('Listening on port: ', port)
})