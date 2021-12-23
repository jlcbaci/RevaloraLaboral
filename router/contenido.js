const {Router} = require("express");
const contenido = new Router();
const conn = require ('../config/connection');

//NUEVO
contenido.post('/savecont', (req, res) => {
    if(req.body.inlineRadioOptions == '1'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == '0'){
        estado = "0";
    }
    let data = { titcontenido: req.body.titcontenido, desccontenido: req.body.desccontenido, flag: estado };
    let sql = "INSERT INTO contenido SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/contenido');
    });
});
//ACTUALIZAR
contenido.post('/updatecont', (req, res) => {
    if(req.body.inlineRadioOptions == '1'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == '0'){
        estado = "0";
    }
    let sql = "UPDATE contenido SET titcontenido='" + req.body.titcontenido + "', desccontenido='" + req.body.desccontenido + "', flag='" + estado + "' WHERE idcontenido =" + req.body.id +" ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/contenido');
    });
});
//ELIMINAR
contenido.post('/delcontenido', (req, res) => {
    let sql = "DELETE FROM contenido WHERE idcontenido=" + req.body.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/contenido');
    });
});
module.exports = contenido;