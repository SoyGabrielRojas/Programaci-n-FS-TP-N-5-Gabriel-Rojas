
const express = require('express');
const app = express();
const morgan = require("morgan");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
morgan(":method :url :status :res[content-length] - :response-time ms");

const configuracion = require("./config.json");

//cuando llega una peticion desde el cliente, debo redireccionar el pedido a su correspondiente controlador
//en la URL tengo la informacion hacia donde enviar


app.use("/api/medico", require("./controladores/medicoController.js"));
app.use("/api/paciente", require("./controladores/pacienteController.js"));
app.use("/api/ingreso", require("./controladores/ingresoController.js"));


//const pacienteController = require("./controladores/pacienteController.js");
//app.use("/api/paciente", pacienteController);


app.listen(configuracion.server.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Sevidor encendido y escuchando en el puerto " + configuracion.server.port);
  }
});


/*
const express = require('express');
const app = express();
const morgan = require("morgan");

// Middleware para análisis de JSON y URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para registro de solicitudes HTTP
app.use(morgan("tiny"));
morgan(":method :url :status :res[content-length] - :response-time ms");

const configuracion = require("./config.json");

// Ruta para controladores
const medicoController = require("./controladores/medicoController.js");
const pacienteController = require("./controladores/pacienteController.js");

// Redirecciona las peticiones hacia sus correspondientes controladores
app.use("/api/medico", medicoController);
app.use("/api/paciente", pacienteController);


// Inicio del servidor
app.listen(configuracion.server.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Servidor encendido y escuchando en el puerto " + configuracion.server.port);
  }
});
*/