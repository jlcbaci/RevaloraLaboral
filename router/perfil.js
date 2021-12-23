const {Router} = require("express");
const perfil = new Router();
const conn = require ('../config/connection');

// SELECT
perfil.post('/saveperfil', (req, res) => {
    if(req.body.inlineRadioOptions == 'Activo'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == 'Inactivo'){
        estado = "0";
    }
    let data = { codsector: req.body.codperfil, sector: req.body.perfil, flag: estado };
    let sql = "INSERT INTO perfil SET ?";
    let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/perfil');
    });
});
//ACTUALIZAR
perfil.post('/updateper', (req, res) => {
    if(req.body.inlineRadioOptions == '1'){
        estado = "1";
    }else if(req.body.inlineRadioOptions == '0'){
        estado = "0";
    }
    let sql1 = "UPDATE perfil SET codperfil='" + req.body.codperfil + "',nomperfil='" + req.body.sector + "', flag='" + estado + "'  WHERE idperfil =" + req.body.id +" ";
    let query1 = conn.query(sql1, (err, results) => {
    if (err) throw err;
        res.redirect('/perfil');
    });
});
//ELIMINAR
perfil.post('/delperfil', (req, res) => {
    let sql = "DELETE FROM perfil WHERE idperfil=" + req.body.idperfil + "";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/perfil');
    });
});
//ViSUALIZAR
/*
perfil.post('/viewperfil', (req, res) => {
    let idperfil = req.body.id;
    let sql = "SELECT p.idperfil, d.sector, p.codperfil, p.nomperfil, p.compgen, p.numvigencia, p.version, p.fecaproba, p.flag FROM perfil AS p JOIN sector AS d ON p.idsector = d.idsector WHERE p.idperfil=" + idperfil + "";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/perfil');
    });
});
//CARGA COMBO SECTOR
perfil.get('/cmbsector', (req, res) => {
    let sql = "SELECT idsector, sector FROM sector WHERE flag = 1";
    let query = conn.query(sql, (err, rows) => {
        console.log(rows[0]);
        if (err) throw err;
        res.render('/perfil', {
            sectorlist: rows
        });
    });
});
*/
module.exports = perfil;