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
  const html =  `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Thank You</title>
</head>
<body style="margin:0;background:#eef2ff;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:40px 10px;background:#eef2ff;">
<tr><td align="center">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff;border-radius:18px;overflow:hidden;">
<tr><td style="background:linear-gradient(90deg,#4f46e5,#2563eb);padding:34px;text-align:center;">
<div style="width:72px;height:72px;border-radius:50%;background-image: src("https://res.cloudinary.com/dtmtgaepv/image/upload/v1785163289/Contents_image/ksin6pxfcnjtruf2x8as.jpg");color:#2563eb;line-height:72px;font-size:34px;margin:auto;">

</div>
<h1 style="margin:18px 0 8px;color:#fff;">Message Received!</h1>
<p style="margin:0;color:#e5e7eb;">Thank you for contacting me.</p>
</td></tr>

<tr><td style="padding:40px;">
<p style="font-size:18px;color:#111827;">Hi <strong>${data.name}</strong>,</p>

<p style="color:#4b5563;line-height:1.8;">
Thank you for reaching out through my portfolio website. Your message has been successfully received.
I'll carefully review it and get back to you as soon as possible.
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-left:5px solid #2563eb;border-radius:10px;margin:28px 0;">
<tr><td style="padding:18px;">
<strong style="color:#2563eb;">⏱ Expected Response</strong><br>
<span style="color:#6b7280;">Within 24–48 hours.</span>
</td></tr>
</table>

<table width="100%" cellpadding="12" cellspacing="0">
<tr>
<td width="33%" style="border:1px solid #e5e7eb;border-radius:12px;text-align:center;">
<div style="font-size:30px;">💻</div>
<b>Full-Stack</b><br><span style="font-size:13px;color:#6b7280;">Modern MERN apps</span>
</td>
<td width="4%"></td>
<td width="33%" style="border:1px solid #e5e7eb;border-radius:12px;text-align:center;">
<div style="font-size:30px;">⚙️</div>
<b>Backend APIs</b><br><span style="font-size:13px;color:#6b7280;">Node.js & Express</span>
</td>
<td width="4%"></td>
<td width="33%" style="border:1px solid #e5e7eb;border-radius:12px;text-align:center;">
<div style="font-size:30px;">🤖</div>
<b>AI</b><br><span style="font-size:13px;color:#6b7280;">GenAI & Python</span>
</td>
</tr>
</table>

<div style="text-align:center;margin:36px 0;">
<a href="https://my-portfolio-frontend-bice.vercel.app/" style="background:#2563eb;color:#fff;text-decoration:none;padding:15px 34px;border-radius:30px;font-weight:bold;display:inline-block;">Visit My Portfolio</a>
</div>

<hr style="border:none;border-top:1px solid #e5e7eb;">

<p style="text-align:center;font-size:20px;font-weight:bold;color:#111827;">Muzeyan Adem</p>
<p style="text-align:center;color:#6b7280;margin-top:-10px;">Full-Stack (MERN) • Backend • AI Developer</p>

<p style="text-align:center;">
<a href="https://github.com/muzayenadem">GitHub</a> •
<a href="https://linkedin.com">LinkedIn</a> •
<a href="mailto:muzynadem@gmail.com">Email</a>
</p>

<p style="text-align:center;font-size:12px;color:#9ca3af;">
This is an automated confirmation email. No reply is required.<br><br>
© 2026 Muzeyan Adem. All rights reserved.
</p>

</td></tr>
</table>
</td></tr>
</table>
</body>
</html>
`
  return html
}


const portfolio_html = (data) =>{
  html = `
  <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>

        <body style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">

          <div style="
            max-width:600px;
            margin:auto;
            background:white;
            padding:30px;
            border-radius:12px;
            box-shadow:0 4px 12px rgba(0,0,0,0.1);
          ">

            <h2 style="color:#2563eb; text-align:center;">
              New Portfolio Contact Message
            </h2>

            <p style="font-size:16px; color:#444;">
              You have received a new message from a visitor through your portfolio website.
            </p>

            <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">

            <div style="line-height:1.8; color:#333;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              
              <p><strong>Message:</strong></p>
              <div style="
                background:#f9fafb;
                padding:15px;
                border-left:4px solid #2563eb;
                border-radius:6px;
              ">
                ${data.message}
              </div>
            </div>

            <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">

            <p style="font-size:14px; color:#666;">
              This message was submitted through your personal portfolio website.
            </p>

            <a 
              href="https://dodola-official-website.vercel.app"
              style="
                display:inline-block;
                margin-top:15px;
                padding:12px 20px;
                background:#2563eb;
                color:white;
                text-decoration:none;
                border-radius:6px;
              "
            >
              Visit Portfolio
            </a>

            <p style="
              margin-top:25px;
              font-size:12px;
              color:#999;
              text-align:center;
            ">
              © ${new Date().getFullYear()} Muzeyan Adem. All rights reserved.
            </p>
          </div>
        </body>
        </html>
    `

  return html
}
// for sending message

const send_to_me = async (data) => {
  try {
    await apiInstance.sendTransacEmail({
      subject: "New Contact Message Received - Portfolio",
      sender: {
        email: process.env.EMAIL,
        name: "Portfolio Contact System",
      },
      to: [
        {
          email: process.env.EMAIL,
          name: "Muzeyan Adem",
        },
      ],
      htmlContent: portfolio_html(data),
      textContent: `
        New Portfolio Contact Message

        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Subject: ${data.subject}

        Message:
        ${data.message}

        Sent from your portfolio website.
      `,
    });

    console.log(`Email sent successfully to ${process.env.EMAIL}`);
  } catch (error) {
    console.error(
      "Brevo Error:",
      error.response?.body || error.message
    );
    throw error;
  }
};

const send_to_customer = async(data)=> {
  try {
    await apiInstance.sendTransacEmail({
      subject: "Your message successfully reached us !",
      sender: { 
        email: process.env.EMAIL, 
        name: "Muzeyan Adem. | Portfolio " 
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
            return res.status(401).send({"error":"invalid email"})

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
