const mat = require('./matematicas'); 
const color = require('colors');
// iniciamos el servidor
const express = require('express');
const app = express();

const morgan = require('morgan');

// console.log('hola mundo'); 
// console.log(mat); 

/* Crear un servidor HTTP */
/*
const http = require('http'); 
const handleServer = function(request, response) {
                        response.writeHead(200,  {'content-type':'text/html'}); 
                        response.write('<h1>Hola mundo Server Creado con Node!!!</h1>'); 
                        response.end(); 
                    }              

const server = http.createServer(handleServer); 

server.listen(1500, function () {
    console.log('Server en el puerto 1500'.bgBlue);    
})
*/
// --- Settings ---
app.set('appname','GrupoKD');
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

// --- Middleware ---
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  })); // dev mustra informacion de la peticion.


// ---  Rutas ---
app.get('/',(req,res)=>{
    //res.write('<h1>Hola Mundo con Express y Node.js');
    //res.end();
    res.render('index.ejs');
});
app.get('/acceso',(req,res)=>{
    //res.write('<h1>Hola Mundo con Express y Node.js');
    //res.end();
    res.render('acceso.ejs');
});


app.get('*',(req,res)=>{
    res.write('Pagina no encontrada!!!');
    res.end();
});


// --- levantando servidor
app.listen(1500,()=>{
    console.log('Server Funcionando - en el puerto 1500'.red);
    console.log('Nombre de la App:'.blue,app.get('appname').green);
});