const {Router} = require("express");
const sector = new Router();
const conn = require ('../config/connection');

// SELECT
sector.post('/savesector', (req, res) => {
    if(req.body.inlineRadioOptions == '1'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == '0'){
        estado = "0";
    }
    let data = { codsector: req.body.codsector, sector: req.body.sector, flag: estado };
    let sql = "INSERT INTO sector SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/sector');
    });
});
//ACTUALIZAR
sector.post('/updatesec', (req, res) => {
    if(req.body.inlineRadioOptions == '1'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == '0'){
        estado = "0";
    }
    let sql = "UPDATE sector SET sector='" + req.body.sector + "', flag='" + estado + "'  WHERE idsector =" + req.body.id +" ";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/sector');
    });
});
//ELIMINAR
sector.post('/delsec', (req, res) => {
    let sql = "DELETE FROM sector WHERE idsector=" + req.body.id + "";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/sector');
    });
});
/*
//ViSUALIZAR
sector.post('/viewsec', (req, res) => {
    let sql = "SELECT * FROM sector WHERE idsector=" + req.body.id + "";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/sector');
    });
});
*/
module.exports = sector;