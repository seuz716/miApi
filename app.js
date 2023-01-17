 /* IMPORTAR MODULOS */


const  express = require('express');
const bodyparser = require('body-parser');
const controladorProductos = require('./api/productos/controller');
 
/* 
 req (solicitud) y res (respuesta) son exactamente los mismos objetos que proporciona Node, 
 por lo que puede invocar req.pipe(), req.on('data', callback) y cualquier otro objeto que 
 invocaría sin estar Express implicado. */

/*  CONFIGURACION DE MODULOS */

const app = express();
app.use(  bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const port = 3000;


// INICIALIZACION DE RUTAS

app.use("/api/productos", controladorProductos);


//CORRER EL SERVIDOR

app.listen(port,function () {
    console.log("api ejecutandose en el puerto "+ port);
})
