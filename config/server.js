express = require('express');
consign = require('consign');
bodyParser = require('body-parser');

let app = express();

/* setar as variáveis 'view engine' e 'views' do express' */

app.set('view engine','ejs');
app.set('views','./app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body parser */
app.use(bodyParser.urlencoded({extended:true}));

/* não vou colocar express validator porque não funciona comigo */

consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app);

module.exports = app;