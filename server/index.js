const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const brevo = require('@getbrevo/brevo');
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_EMAIL_SENDER_API);

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 4000

const customer_html = (data) =>{
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; width: 100% !important;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f5f7; padding: 40px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td height="6" style="background: linear-gradient(90deg, #6366f1, #3b82f6);"></td>
          </tr>
          
          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <!-- Icon/Logo Placeholder -->
              <div style="font-size: 48px; margin-bottom: 20px; line-height: 1;">✉️</div>
              
              <h1 style="color: #1f2937; font-size: 24px; font-weight: 700; margin: 0 0 12px 0; line-height: 1.3;">
                Thank You for Reaching Out!
              </h1>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Hi ${data.name}! Thanks for visiting my portfolio and sending over a message. I have successfully received your note and will review it as soon as possible.
              </p>
              
              <!-- Timeline Callout Box -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 16px; text-align: center; color: #6366f1; font-size: 15px; font-weight: 600;">
                    ⏱️ Expected Response Time: Within 24–48 Hours
                  </td>
                </tr>
              </table>
              
              <!-- Primary Action Button -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #6366f1;">
                    <a href="https://my-portfolio-frontend-bice.vercel.app/" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
                      Return to Portfolio
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="padding: 0 30px;">
              <div style="border-top: 1px solid #e5e7eb; height: 1px; width: 100%;"></div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #fafafa;">
              <p style="color: #9ca3af; font-size: 13px; margin: 0 0 12px 0; line-height: 1.4;">
                Let's connect across the web:
              </p>
              
              <!-- Social / Developer Links -->
              <p style="margin: 0; font-size: 14px;">
                <a href="https://github.com/muzayenadem" target="_blank" style="color: #4b5563; text-decoration: none; font-weight: 500; margin: 0 8px;">GitHub</a> •
                <a href="https://linkedin.com" target="_blank" style="color: #4b5563; text-decoration: none; font-weight: 500; margin: 0 8px;">LinkedIn</a> •
                <a href="https://twitter.com" target="_blank" style="color: #4b5563; text-decoration: none; font-weight: 500; margin: 0 8px;">Twitter</a>
              </p>
              
              <p style="color: #cbd5e1; font-size: 12px; margin: 20px 0 0 0;">
                © 2026 Muzeyan Adem. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
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
        <h2>Name : ${data.name}</h2>
        <h3>Email : ${data.email}</h3>
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


const send_to_customer = async(data)=> {
  try {
    await apiInstance.sendTransacEmail({
      subject: "Your message successfully reached us !",
      sender: { 
        email: process.env.EMAIL, 
        name: "Next Generation Software Company" 
      },
      to: [{email: data.email}],
      htmlContent: customer_html(data),
      textContent: "Thanks for contacting us!",
    });
    console.log(`Email sent to ${data.email}`);
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
            await send_to_customer(data)
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
