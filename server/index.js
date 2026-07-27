
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
const send_to_me = async (data) => {
  try {
    await apiInstance.sendTransacEmail({
      subject: "New customer sent a message Successfully!",
      sender: { 
        email: process.env.EMAIL, 
        name: "Next Generation Software Company" 
      },
      to: [{ email: process.env.EMAIL}],
      htmlContent: `
        <h1>Welcome!</h1>
        <h2>Name : `${data.name}`</h2>
        <h3>Email : `${data.email}</h3>
        <p>this message is contacted you with </p>
        <a href="https://dodola-official-website.vercel.app">Get started now!</a>
      `,
      textContent: "Thanks for joining us!",
    });
    console.log(`Email sent to ${process.env.EMAIL}`);
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    throw error;
  }
};


const send_to_customer = async (email) => {
  try {
    await apiInstance.sendTransacEmail({
      subject: "Your message successfully reached us !",
      sender: { 
        email: process.env.EMAIL, 
        name: "Next Generation Software Company" 
      },
      to: [{email}],
      htmlContent: `
        <h1>Welcome!</h1>
        <p>You've successfully contacted us </p>
        <a href="https://dodola-official-website.vercel.app">Get started now!</a>
      `,
      textContent: "Thanks for contacting us!",
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
        const data = {name,phone,email,subject,message}
      
        console.log(email)
        const assure_email = assureEmail(email)
        if(!assure_email)
            return res.status(401).json({"error":"invalid email"})

        try {
            await send_to_me(data);
            await send_to_customer(email)
            console.log(`Verified! Email sent to ${email}`);
            return res.status(200).json({ success: true, message: "Confirmation email sent!" });
          } catch (error) {
            console.log({"brevo_error":error.messagea})
            res.status(500).json({ 
              error: "Failed to send email",
              details: error.message 
            });
          }
        //res.status(200).send('Your message has been sent successfully')
    } catch (error) {
        console.log({"main_error":error.message})
        res.status(500).send(error.message)
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
