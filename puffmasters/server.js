const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Set up nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail', // you can use other services like 'yahoo', 'outlook' etc.
        auth: {
            user: 'YOUR_GMAIL_ADDRESS',
            pass: 'YOUR_GMAIL_PASSWORD'
        }
    });

    // Mail options
    let mailOptions = {
        from: email,
        to: 'puffmasterfox@gmail.com', // recipient address
        subject: 'New contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    });
});

