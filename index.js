

// iniciamos el servidor
const express = require('express');
const app = express();

const color = require('colors');
const morgan = require('morgan');

// --- carg. rutas ---
const ruta = require('./rutas');

// --- Settings ---
app.set('appname','GrupoKD');
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

// --- Middleware ---
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  })); // dev mustra informacion de la peticion.

// ---  Rutas ---
app.use(ruta);

// --- levantando servidor
app.listen(1500,()=>{
    console.log('Server Funcionando - en el puerto 1500'.red);
    console.log('Nombre de la App:'.blue,app.get('appname').green);
});