const {Router} = require("express");
const contacto = new Router();
const nodemailer = require("nodemailer");
const JSONTransport = require("nodemailer/lib/json-transport");

contacto.post("/send-email", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const tema = req.body.tema;
    const mensaje = req.body.mensaje;

    if(tema == 'option1'){
        var opcion = "Consulta";
    }else if(tema == 'option2'){
        var opcion = "Catálogo";
    }else if(tema == 'option3'){
        var opcion = "Servicios";
    }else if(tema == 'option4'){
        var opcion = "Otros";
    }
    
    let transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        post:process.env.SMTP_PORT,
        secure:false,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    let htmlContent = `<br><h2>Mensaje de contacto</h2>
    <h3><p><strong>Nombres: </strong>${nombre} ${apellido}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Teléfono: </strong>${telefono}</p>
    <p><strong>Asunto: </strong>${opcion}</p>
    <p><strong>Mensaje: </strong>${mensaje}</p></h3>`

    let mailOptions = {
        from: "Remitente",
        to: `${nombre} ${apellido} <${email}>`,
        subject: `${opcion}`,
        html: htmlContent
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        }else{
            console.log("Correo enviado");
            res.render('pages/enviado');
            //res.status(200).jsonp(reqbody);
        }
    });
});
module.exports = contacto;
