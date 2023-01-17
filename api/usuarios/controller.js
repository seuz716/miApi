const express = require('express');
controladorUsuarios = express.Router();

controladorUsuarios.get("/iniciarSesion", function (req, res) {
    res.send("hola")
});

module.exports.controladorUsuarios
