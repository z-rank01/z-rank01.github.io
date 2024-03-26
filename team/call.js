const express = require('express')
const app = express()

var dir = __dirname

app.use(express.static(__dirname));

app.get('/team', (req,res)=>{
    res.sendFile('code/team.html', {"root" : dir})
})

app.listen(3000, ()=>{
    console.log('Listen to port 3000...')})