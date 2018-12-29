const express = require('express');
const ruta = express.Router();

ruta.get('/',(req,res)=>{
    //res.write('<h1>Hola Mundo con Express y Node.js');
    //res.end();
    res.render('index.ejs');
});
ruta.get('/acceso',(req,res)=>{
    //res.write('<h1>Hola Mundo con Express y Node.js');
    //res.end();
    res.render('acceso.ejs');
});

ruta.get('*',(req,res)=>{
    res.write('Pagina no encontrada!!!');
    res.end();
});

module.exports= ruta;