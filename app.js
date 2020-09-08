const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;

app.listen(port, console.log(`listening to port ${port}`));

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '1270f7824dd6a6',
    pass: '4aec8b54868bcd',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.use(express.json());
app.post('/send', (req, res) => {
  const mailOptions = {
    from: '"Resort Team" <from@example.com>',
    to: req.body.email,
    subject: 'Resort Test',
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send('error');
    }
    res.send('success');
  });
});

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
