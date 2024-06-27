const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Hello wrold')
})

app.listen(4444,()=>{
    console.log('susseed')
})