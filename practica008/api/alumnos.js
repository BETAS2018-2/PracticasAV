
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

module.exports = (app)=>{
    app.get('/alumnos/nombres', (req, res)=>{
        res.json(alumnos);
    });
    
    app.get('/alumnos/calificacion/:id', (req, res)=>{
        console.log(req.params);
        let { id } = req.params;
        alumno = alumnos.find(alumno => alumno.id == id);
        res.json({calificacion: alumno.cal});
    });
}