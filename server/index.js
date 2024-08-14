
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 4000

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors())
app.post('/send-email', (req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;
        res.status(200).send('Your message has been sent successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
