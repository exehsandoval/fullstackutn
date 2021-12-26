const express = require('express');
const app = express();

const nodemailer = require("nodemailer");
const Mail = require('nodemailer/lib/mailer');
const { getMaxListeners } = require('process');

const PORT = process.env.PORT || 5000;

app.use(express.static('form'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + './contacto/contacto.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'exemailsdeprueba@gmail.com',
            pass: 'prueba123' 
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'exehsandoval@gmail.com',
        subject: `Mensaje de ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email enviado: ' + info.response);
            res.send('sucess')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})