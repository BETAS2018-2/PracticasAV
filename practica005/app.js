let suma = (a, b)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(a)){
            reject("No es un número");
        } else {
            resolve(a+b);
        }
    });
}

// // console.log(suma());

// suma('a',2).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

let resta = async(a,b)=>{
    setTimeout(()=>{
        return a - b;
    }, 2000);
}

// console.log(resta(10,9));

let operacion = async(a, b)=>{
    var res = await suma(a,b);
    res = await resta(res, a);
    console.log(res);
}

operacion(10,5);

for(let a = 0; a < 10; a++){
    operacion(a, 10);
}