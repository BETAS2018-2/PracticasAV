var err = "Ha ocurrido un error";
primerPaso = async () => {
    return "Primer Paso";
}
segundoPaso= () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(console.log("Segundo Paso")), 3000);
    });
}
function tercerPaso(){
    return new Promise((resolve, reject)=>{
        setTimeout( resolve(console.log("Tercer Paso")), 3000);
    });
}
function pasoFinal(){
    return new Promise((resolve, reject)=>{
        setTimeout( resolve(console.log("Paso Final")));
    });
}


// primerPaso()
// .then((res)=>{
//     console.log(res);
// }).then(()=>{

// }).then(()=>{

// }).catch((err)=>{
//     console.log(err)
// })

(async()=>{
    let pasouno = await primerPaso();
    console.log(pasouno);
})();