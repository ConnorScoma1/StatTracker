const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load Env
dotenv.config({ path:'./config.env' });

const app = express()

app.listen(5000, ()=> {
    console.log('APP ON PORT 5000')
})