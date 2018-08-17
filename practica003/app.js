let express = require('express');
let app = express();
app.listen('3000', ()=>{
    console.log('escuchando en el puerto 3000');
});

app.get('/', (req, res)=>{
    res.send("Hola mundo en express");
});

app.get('/dihola/:nombre', (req, res)=>{
    let nombre = req.params.nombre;
    res.send(`Hola ${nombre}! Bienvenido`);
});