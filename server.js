const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load Env
dotenv.config({ path:'./config.env' });

const app = express()

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'))

const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT:${port}`)
})