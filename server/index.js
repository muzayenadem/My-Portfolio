const express = require('express')
const bodyParser = require('body-parser')
// const app = express()

// app.get('/',(req,res)=>{
//     res.status(200).send('Hello wrold')
// })
// app.get('/rahmaan',(req,res)=>{
//     res.send('yaa rabbi naaf laaffisi waan hundaa')
// })

// app.listen(4444,()=>{
//     console.log('susseed')
// })

const cors = require('cors');
const router = require('./routes/api')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
///Test Route
// API Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
