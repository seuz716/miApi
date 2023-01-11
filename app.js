 /* IMPORTAR MODULOS */

const { response } = require('express');
const express = require('express');

/*  CONFIGURACION DE MODULOS */
const app = express();
const port = 3500;


// INICIALIZACION DE RUTAS

app.get("/prueba", function (req, res) {

    // PROCESAMIENTO DE PETICIONES
    let nombre = "Cesar Abadia"
    // ENVIO DE RESPUESTAS
    response.send(nombre);
    
} )


//CORRER EL SERVIDOR

app.listen(port,function () {
    console.log("api ejecutandose en el pueto "+ port);
})
