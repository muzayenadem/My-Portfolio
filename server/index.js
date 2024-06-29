const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Hello wrold')
})
app.get('/rahmaan',(req,res)=>{
    res.send('yaa rabbi naaf laaffisi waan hundaa')
})

app.listen(4444,()=>{
    console.log('susseed')
})