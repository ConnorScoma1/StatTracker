const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load Env
dotenv.config({ path:'./config.env' });

const app = express()

app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
    console.log(req.params.platform, req.params.gamertag)
    res.send('hello')
})

const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT:${port}`)
})