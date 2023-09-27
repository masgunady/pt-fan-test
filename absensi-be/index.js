require('dotenv').config({
    path: '.env'
})

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/', require('./src/routes'))


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
