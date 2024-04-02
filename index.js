require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/vishal',(req,res)=>{
    res.send("My name is vishal")
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})