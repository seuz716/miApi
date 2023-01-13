 /* IMPORTAR MODULOS */


const  express = require('express')
 /* 
 req (solicitud) y res (respuesta) son exactamente los mismos objetos que proporciona Node, 
 por lo que puede invocar req.pipe(), req.on('data', callback) y cualquier otro objeto que 
 invocaría sin estar Express implicado. */

/*  CONFIGURACION DE MODULOS */

const app = express();
const port = 3600;


// INICIALIZACION DE RUTAS

app.get("/hola", function (req, res) {
  res.send('GET request to homepage')
})

app.get("/suave", function (req, res) {
  res.send('GET request to homepage')
})


//CORRER EL SERVIDOR

app.listen(port,function () {
    console.log("api ejecutandose en el puerto "+ port);
})
