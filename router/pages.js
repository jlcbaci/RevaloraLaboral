const {Router} = require("express");
const pages = new Router();
const conn = require ('../config/connection');

pages.get("/", (req, res) => {
    let sql = "SELECT * FROM contenido WHERE idcontenido IN (1,2) AND flag = 1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('pages/inicio', {
            contenido: results,
            titulo: 'REVALORA LABORAL'
        });
    });
 });
pages.get('/nosotros/', (req, res) => {
    let sql = "SELECT * FROM contenido WHERE idcontenido IN (3,4,5) AND flag = 1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('pages/nosotros',{
            contenido: results,
            pagtitulo01: 'Nosotros',
            titulo: 'REVALORA LABORAL'
        });
    });
});
pages.get('/contacto/', (req, res) => {
    res.render('pages/contacto',{
        pagtitulo03: 'Contáctenos'
    });
});
pages.get('/panel/', (req, res) => {
    res.render('admin/panel',{
        layout: 'layouts/layoutpanel',
        titulo: 'REVALORA LABORAL'
    });
});
pages.get('*', (req, res) => {
    res.render('pages/404',{
        pagtituloerror: '404',
        layout: 'layout'
    });
});
module.exports = pages;