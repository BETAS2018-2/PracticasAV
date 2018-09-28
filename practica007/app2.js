const express = require('express');
const app = express();

app.get('/data/alumnos', (req, res)=>{
    res.send("Hola");
});

app.listen(3000, (err)=>{
    console.log("Server listening in port 3000!");
});