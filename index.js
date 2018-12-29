const mat = require('./matematicas'); 
const color = require('colors');
const express = require('express');

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

const server = express();
server.get('/',(request,response)=>{
    response.send('<h1>Hola Mundo con Express y Node.js');
    response.end();
});
server.listen(1500,()=>{
    console.log('Sever en el puerto 1500'.red);
});