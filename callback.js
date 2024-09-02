datos = [{
    "medico": "Dr.0",
    "matricula": "1",

},
    {
        "medico": "Dr.1",
        "matricula": "2",
    },
    {
        "medico": "Dr.2",
        "matricula": "3",
    }];

function primero(){
    setTimeout(() =>{
        console.log("base");
        unaFuncion();
    }, 3000);
};

function segundo(){
    console.log("Segundo");
};

primero(segundo())

primero(segundo);


