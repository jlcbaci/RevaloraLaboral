const {Router} = require("express");
const router = new Router();
const conn = require ('../config/connection');

router.get('/catalogo', (req, res) => {
    let sql = "SELECT * FROM perfil WHERE flag = 1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
            res.render('pages/catalogo', {
            results: results,
            pagtitulo02: 'Catálogo',
            titulo: 'Catálogo de Perfiles Ocupacionales',
            titfooter: 'Revalora Laboral'
        });
    });
});
router.post('/buscaperfil', (req, res) => {
    let consulta = req.body.search;
    let sql = "SELECT * FROM perfil WHERE nomperfil LIKE '%"+ consulta + "%' AND flag = '1'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('pages/catalogo', {
            results: results,
            pagtitulo02: 'Catálogo',
            titulo: 'Catálogo de Perfiles Ocupacionales',
            titfooter: 'Revalora Laboral'
        });
    });
});
router.get('/perfil', (req, res) => {
    let sql = "SELECT * FROM perfil AS p JOIN sector AS d ON p.idsector = d.idsector";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('admin/perfil', {
            layout: 'layouts/layoutpanel',
            results: results
        });
    });
});
router.get('/sector', (req, res) => {
    let sql = "SELECT * FROM sector";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('admin/sector', {
        layout: 'layouts/layoutpanel',
        results: results
        });
    });
});
router.get('/contenido', (req, res) => {
    let sql = "SELECT * FROM contenido";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('admin/contenido', {
        layout: 'layouts/layoutpanel',
        results: results
        });
    });
});
module.exports = router;