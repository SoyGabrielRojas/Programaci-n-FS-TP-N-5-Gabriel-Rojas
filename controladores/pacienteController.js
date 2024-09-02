const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pacienteBD = require("./../modelos/pacienteModel.js");

// Rutas disponibles para Paciente
app.get("/", listarPacientes);
app.get("/:nss", getByNSS);  
app.post('/create', crearPaciente);
app.put("/:nss", modificarPaciente); 
app.delete("/:nss", eliminarPaciente); 

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
            pacienteBD.metodos.getByNSS(req.body.nss, (err, pacienteCreado) => {
                if (err) {
                    res.status(500).json({ message: "Paciente creado, pero error al recuperar los datos", detail: err });
                } else {
                    res.status(201).json({
                        message: "Información del paciente creado",
                        paciente: pacienteCreado
                    });
                }
            });
        }
    });
}

function modificarPaciente(req, res) {
    const nss = req.params.nss;
    pacienteBD.metodos.update(req.body, nss, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error al modificar paciente", detail: err });
        } else {
            pacienteBD.metodos.getByNSS(nss, (err, pacienteModificado) => {
                if (err) {
                    res.status(500).json({ message: "Paciente modificado, pero error al recuperar los datos", detail: err });
                } else {
                    res.status(200).json({
                        message: "Información del paciente modificado",
                        paciente: pacienteModificado
                    });
                }
            });
        }
    });
}

function eliminarPaciente(req, res) {
    const nss = req.params.nss;
    pacienteBD.metodos.getByNSS(nss, (err, pacienteEliminado) => {
        if (err) {
            res.status(500).json({ message: "Error al obtener datos del paciente a eliminar", detail: err });
        } else if (!pacienteEliminado.length) {
            res.status(404).json({ message: "Paciente no encontrado" });
        } else {
            pacienteBD.metodos.deletePaciente(nss, (err, result) => {
                if (err) {
                    res.status(500).json({ message: "Error al eliminar paciente", detail: err });
                } else {
                    res.status(200).json({
                        message: "Información del paciente eliminado",
                        paciente: pacienteEliminado
                    });
                }
            });
        }
    });
}


module.exports = app;
