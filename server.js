const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const password = process.env.PASS;

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send', function(req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contactellaine@gmail.com',
            pass: password
        },
        logger: true
    });
    mailOpts = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: 'contactellaine@gmail.com',
        subject: 'New message from contact form at ellaine.me',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (err, success)  {
            if (err) {
                console.log(err.message);
                res.json('failed');
            }
            else {
                res.json('success');
            }
        });
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
