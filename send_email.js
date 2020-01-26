const keys = require('./keys');
const nodemailer = require('nodemailer'); 
let name = 'Leesh';
let email = 'kramer1346@gmail.com';
let subject = 'Responsive Version';
// let output = '<h1>test</h1>';
const output = require('./js/responsive_email.js')(name);

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: keys.mailHost,
  port: 465,
  auth: {
      user: keys.mailUser, // generated ethereal user
      pass: keys.mailPass  // generated ethereal password
  },
  secure: true
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Moneyboat Login" <Support@my.moneyboat.co.uk>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    // text: 'Hello world?', // plain text body
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

});