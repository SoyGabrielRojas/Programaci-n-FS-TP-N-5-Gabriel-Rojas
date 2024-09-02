const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pacienteBD = require("./../modelos/pacienteModel.js");

// Rutas disponibles para Paciente
app.get("/", listarPacientes);
app.get("/:nss", getByNSS);  // Cambié para que use nss en lugar de id
app.post('/create', crearPaciente);
app.put("/:nss", modificarPaciente);  // Cambié para que use nss en lugar de id
app.delete("/:nss", eliminarPaciente);  // Cambié para que use nss en lugar de id

// Funciones
function listarPacientes(req, res) {
    pacienteBD.metodos.getAll((err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al listar pacientes", detail: err });
        } else {
            res.status(200).json(result);
        }
    });
}

function getByNSS(req, res) {
    const nss = req.params.nss;
    pacienteBD.metodos.getByNSS(nss, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al obtener paciente por NSS", detail: err });
        } else {
            res.status(200).json(result);
        }
    });
}

function crearPaciente(req, res) {
    pacienteBD.metodos.crearPaciente(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al crear paciente", detail: err });
        } else {
            res.status(201).json(result);
        }
    });
}

function modificarPaciente(req, res) {
    const nss = req.params.nss;
    pacienteBD.metodos.update(req.body, nss, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al modificar paciente", detail: err });
        } else {
            res.status(200).json(result);
        }
    });
}

function eliminarPaciente(req, res) {
    const nss = req.params.nss;
    pacienteBD.metodos.deletePaciente(nss, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al eliminar paciente", detail: err });
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = app;
