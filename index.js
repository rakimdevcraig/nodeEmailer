const nodemailer = require('nodemailer');
// let transport = nodemailer.createTransport(options[defaults])

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'd025b14c5841a4',
        pass: '87551db675d23c'
    }
});

const message = {
    from: 'elonmusk@gmail.com', // Sender address
    to: 'rakimcraig617@gmail.com',         // List of recipients
    subject: 'Price for the macbook has dropped below your target!!', // Subject line
    text: 'Go and get your macbook at its new low price!!' // Plain text body
};
transport.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});