const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Will build up the server
const app = express()
// Help print out logs in a certain way
app.use(morgan('combine'))
// Allow our app to easily parse JSON data
app.use(bodyParser.json())
// Allow any host to access this
app.use(cors())
// Define what happens when you get the request
app.get('/status', (req, res) => { 
    res.send({ 
        message: 'Hello World!'
    }) 
})

app.listen(process.env.PORT || 8081)

