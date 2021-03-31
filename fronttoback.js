const express=require('express')
const app=express()
const port=3000
app.post('/',(req,res)=>{res.send('hi');})

app.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`)
})