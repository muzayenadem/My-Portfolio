
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const brevo = require('@getbrevo/brevo');
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_EMAIL_SENDER_API);

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 4000



// for sending message
const sendWelcomeEmail = async (email) => {
  try {
    await apiInstance.sendTransacEmail({
      subject: "You've Joined Successfully!",
      sender: { 
        email: "atdodola@gmail.com", 
        name: "Next Generation Software Company" 
      },
      to: [{ email }],
      htmlContent: `
        <h1>Welcome!</h1>
        <p>You've successfully subscribed to our service.</p>
        <a href="https://dodola-official-website.vercel.app">Get started now!</a>
      `,
      textContent: "Thanks for joining us!",
    });
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    throw error;
  }
};


function assureEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const gmailDomain = /@gmail\.com$/;
    return emailRegex.test(email) && gmailDomain.test(email);
}




// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors())
app.post('/send-email', async (req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;
        console.log(email)
        const assure_email = assureEmail(email)
        if(!assure_email)
            return res.status(401).json({"error":"invalid email"})

        try {
            await sendWelcomeEmail(email);
            return res.status(200).json({ success: true, message: "Confirmation email sent!" });
          } catch (error) {
            res.status(500).json({ 
              error: "Failed to send email",
              details: error.message 
            });
          }
        //res.status(200).send('Your message has been sent successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
