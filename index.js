require('dotenv').config()
const { apiMarketRequestValidator } = require('@apimarket/apimarket-server')
const express = require('express')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const request = require('request');

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// apimarket middleware checks for...
// 1) a header name ore-access-token with a non-expired ORE access token for this api
// 2) the requet's url and body params match those in the token's body
// app.use(apiMarketRequestValidator())

function returnError(res, errorcode, description) {
    res.status(errorcode).send(`error: ${description}`)
}

app.get('/apiaction', function(req, res) {
    //Require parameter
    const { myparam } = req.query
    if(!myparam) {
        return returnError(res, 400, `Must provide a value for myparam parameter`)
    }
    return res.status(200).json(`you called apiaction - myparam value: ${myparam}`);
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
