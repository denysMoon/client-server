const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api', (req, res)=>{
    res.send({
        name: 'Server'
    })
})

app.listen(8000, ()=>console.log('Port 8000'))