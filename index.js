const bodyParser = require("body-parser") 
const express = require('express')
const res=require('express/lib/response')
const app = express()
const port = 3000

let name,adress, city

app.use(bodyParser.json())
app.get('/', (req, res) => {
res.send('Name: '+name+'Address: '+adress+'City:'+city)
})

app.post('/post',(req,res) => {
    name=req.body.name
    adress=req.body.Address
    city=req.body.City
    res.send('Sent successfully')
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

