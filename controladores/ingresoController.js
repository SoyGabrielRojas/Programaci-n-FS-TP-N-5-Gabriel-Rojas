const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ingresoBD = require("./../modelos/ingresoModel.js");

app.get("/", listarIngresos);
app.post("/create", crearIngreso);

// Funciones
function listarIngresos(req, res) {
    ingresoBD.metodos.getAll((err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al listar ingresos", detail: err });
        } else {
            res.status(200).json(result);
        }
    });
}

function crearIngreso(req, res) {
    ingresoBD.metodos.crearIngreso(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al crear ingreso", detail: err });
        } else {
            res.status(201).json(result);
        }
    });
}

module.exports = app;
