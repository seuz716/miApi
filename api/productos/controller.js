const express = require("express");
const serviceProductos = require("./services");
const controladorProductos = express.Router();
/* 
get -> Obtener todos los productos 
get -> Obtener un producto por id 
get -> Obtener productos por nombre
post -> Crear un nuevo producto

put -> Actualizar un  producto
delete -> Eliminar productos */ 

controladorProductos.get("/obtenerProductos", async function (req, res) {
    let productos = await serviceProductos.obtenerProductos();
    res.send({
      mensaje: "Listado de Productos",
      data: productos,
    });
  });


module.exports=controladorProductos;


