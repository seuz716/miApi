 /* IMPORTAR MODULOS */


const  express = require('express');
const bodyparser = require('body-parser');

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

app.get("/hola", function (req, res) {
  res.send(' request to homepage')
})

app.get("/suave", function (req, res) {
  res.send('GET request to homepage nel')
})

app.post("/usuario", function (req, res) {
  let cuerpo = req.body;
  console.log(cuerpo);
});

app.put("/actualizar/:nombre", function (req, res){
  let nombre = req.params.nombre;
  let cuerpo = req.body
  console.log(cuerpo);
  res.send({
    "nombre":nombre,
    "cuerpo":cuerpo
  })
})

//CORRER EL SERVIDOR

app.listen(port,function () {
    console.log("api ejecutandose en el puerto "+ port);
})
