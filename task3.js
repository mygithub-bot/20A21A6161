const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'GMAIL',
  auth: {
    user: 'massbosscash@gmail.com',
    pass: 'yiwkshyetjddjs'
  }
});


const mailOptions = {
  from: 'massbosscash.com', 
  to: 'pravin.consensus@gmail.com',
  subject: '20A21A6161',
  text: 'This is 20a21a6161 sending email'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});