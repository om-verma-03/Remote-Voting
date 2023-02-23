const express = require('express');
const port = 4400;
const app = express();
const sassMiddleware = require('node-sass-middleware');
const expressLayouts = require('express-ejs-layouts');

app.use(sassMiddleware({
    src: '/assets/scss',
    dest: '/assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());

app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routers'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err) { console.log(`Error in creating a server`); return; }

    console.log('server running');
})
