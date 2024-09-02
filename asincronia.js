bd = [{
    "nombre": "Dr.0",
    "matricula": "1",

},
    {
        "nombre": "Dr.1",
        "matricula": "2",
    },
    {
        "nombre": "Dr.2",
        "matricula": "3",
    }];

   function getDatos(ejecutaEstaFuncion){
    setTimeout(() => {
        ejecutaEstaFuncion(bd);
    }, 4000);
   }

   getDatos(getEdades);

   //let medicos = getDatos();

   function getNombres(medicos){
    for (const medico of medicos){
        console.log(medico.nombre);
    }
   }

   function getEdades(medicos){
    for (const medico of medicos){
        console.log(medico.matricula);
    }
   }

