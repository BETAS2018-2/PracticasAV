let alumnos = [
    {
        id : 1,
        nombre : "Miguel",
        cal : 10
    },
    {
        id : 2,
        nombre : "Antonio",
        cal : 5
    },
    {
        id : 2,
        nombre : "Juan",
        cal : 3
    }
];

let getCalificacion = (id, callback)=>{
    let calificacion = alumnos.find((calificaciones)=>{
        return calificaciones.id === id;
    });
    if(!calificacion){
        callback(`La calificacion del id ${id} no ha sido encontrada`, null);
    } else {
    callback(null, calificacion);
    }
}

getCalificacion(2, (err, calificacion)=>{
    if(err){
        return console.log(err);
    } else {
        return console.log(calificacion);
    }
});
