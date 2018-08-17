let alumnos = [
    {
        id : 1,
        nombre : "Miguel",
        cal : 10,
        materias : [1002, 1003]
    },
    {
        id : 2,
        nombre : "Antonio",
        cal : 5,
        materias : [1002,1003,1005]
    },
    {
        id : 2,
        nombre : "Juan",
        cal : 3,
        materias : [1002,1003,1006, 1007]
    }
];

let getMaterias = (num, callback)=>{
    let respuesta = alumnos.find(numMaterias => numMaterias.materias.length === num);

    if(!respuesta){
        callback(`No hay alumno con ${num} materias`, null);
    } else {
        callback (null, respuesta.nombre)
    }
}

getMaterias(1, (err, respuesta)=>{
    if (err) return console.log(err);
    console.log(respuesta);
})