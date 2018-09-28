let express = require('express');
let app = express();

app.listen('3000',()=>{
    console.log("Funcionando en el puerto 3000");
});

app.get('/calcular/numeros/primo/:n', (req, res)=>{
    let n = req.params.n;

    let divisores = 0;
    for (let index = 1; index <= n; index++) {
        if(n%index == 0){
            divisores++;
        }   
    }
    if(divisores==2){
        res.send({primo : true});
    } else {
        res.send({primo : false});
    }
});

app.get('/calcular/fechas/diferencia/:dd/:mm/:yyyy', (req, res)=>{
    let hoy = new Date();
    let difYears = hoy.getFullYear()-req.params.yyyy;
    let difMonths = (hoy.getMonth()+1)-req.params.mm;
    let difDays = hoy.getDate()-req.params.dd;
    res.send(
        {
            Días : difDays,
            Meses : difMonths,
            Años : difYears
        });

});