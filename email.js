
        const nodemailer = require('nodemailer');

        // Create a transporter object using your SMTP server details
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'weathrico@gmail.com',
            pass: 'weatherico2001'
        }
        });

        // Define the email content
        const mailOptions = {
        from: 'weathrico@gmail.com',
        to: 'norahossam07@gmail.com',
        subject: 'Weatherico: Take care!!',
        text: 'Check weather.'
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
