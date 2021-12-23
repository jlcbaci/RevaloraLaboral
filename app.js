require ('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require ('path');
const app = express();
const port = 8000;
//const port = process.env.port || 8000;

const hbs = require ('hbs');
hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
})
const moment = require("moment");
hbs.registerHelper('formatTime', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});
hbs.registerHelper('selected', function(selected, option) {
    return (selected == option) ? 'selected="selected"' : '';
});
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));
app.use(require('./router/router'));
app.use(require('./router/contacto'));
app.use(require('./router/sector'));
app.use(require('./router/pages'));
app.use(require('./router/perfil'));
app.use(require('./router/contenido'));

app.get("/favicon.ico", (req, res) => {
    return res.sendFile(path.join(__dirname + "/public/img/favicon.ico"));
});

app.listen(port);