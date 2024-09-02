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
    const consulta = "SELECT * FROM paciente";
    connection.query(consulta, (err, resultados) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, resultados);
        }
    });
};

metodos.getByNSS = function (nss, callback) {
    const consulta = "SELECT * FROM paciente WHERE nss = ?";
    connection.query(consulta, [nss], (err, resultados) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, resultados);
        }
    });
};

metodos.crearPaciente = function (datos, callback) {
    const consulta = "INSERT INTO paciente (nss, nombre, apellido, domicilio, codigo_postal, telefono, nro_historial_clinico, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(consulta, [datos.nss, datos.nombre, datos.apellido, datos.domicilio, datos.codigo_postal, datos.telefono, datos.nro_historial_clinico, datos.observaciones], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, result);
        }
    });
};

metodos.update = function (datos, nss, callback) {
    const consulta = "UPDATE paciente SET nombre = ?, apellido = ?, domicilio = ?, codigo_postal = ?, telefono = ?, nro_historial_clinico = ?, observaciones = ? WHERE nss = ?";
    connection.query(consulta, [datos.nombre, datos.apellido, datos.domicilio, datos.codigo_postal, datos.telefono, datos.nro_historial_clinico, datos.observaciones, nss], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, result);
        }
    });
};

metodos.deletePaciente = function (nss, callback) {
    const consulta = "DELETE FROM paciente WHERE nss = ?";
    connection.query(consulta, [nss], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(undefined, result);
        }
    });
};

module.exports = { metodos };
