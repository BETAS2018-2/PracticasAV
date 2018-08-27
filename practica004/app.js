var ms = process.argv[2];
console.log(ms);
ms = ms.split("-ms=")[1];
console.log(`Hola ${ms}`);