require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user:process.env.REACT_APP_EMAIL_USER,
      pass:process.env.REACT_APP_EMAIL_PASS
    }
  });
 
  
  // Email to site owner
  const mailOptions = {
    from: email,
    to:process.env.REACT_APP_EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  // Thank-you email to sender
  const thankYouMail = {
    from:process.env.REACT_APP_EMAIL_USER,
    to: email,
    subject: 'Thank You for Contacting Us',
    text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Bluewave`
  };

  // Send emails
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    transporter.sendMail(thankYouMail, (err, info2) => {
      if (err) {
        return res.status(500).send(err.toString());
      }
      res.status(200).send('Emails sent successfully');
    });
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
