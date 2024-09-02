const mysql = require("mysql");
const configuracion = require("config.json");

const connection = mysql.createConnection(configuracion.database);
connection.connect((err) => {
    if (err) {
        console.log("Error al conectar a la base de datos:", err.code);
    } else {
        console.log("Conexión a la base de datos establecida.");
    }
});

var metodos = {};

metodos.getAll = function (callback) {
    const consulta = `
        SELECT 
            ingreso.*, 
            CONCAT(paciente.apellido, ' ', paciente.nombre) AS ApeNomPaciente, 
            CONCAT(medico.apellido, ' ', medico.nombre) AS ApeNomMedico
        FROM ingreso
        JOIN paciente ON ingreso.nro_historial_paciente = paciente.nro_historial_clinico
        JOIN medico ON ingreso.matricula_medico = medico.matricula
    `;
    connection.query(consulta, (err, resultados) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, resultados);
        }
    });
};

metodos.crearIngreso = function (datos, callback) {
    const consulta = "INSERT INTO ingreso (fecha_ingreso, nro_habitacion, nro_cama, observaciones, nro_historial_paciente, matricula_medico) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(consulta, [datos.fecha_ingreso, datos.nro_habitacion, datos.nro_cama, datos.observaciones, datos.nro_historial_paciente, datos.matricula_medico], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, result);
        }
    });
};

module.exports = { metodos };
