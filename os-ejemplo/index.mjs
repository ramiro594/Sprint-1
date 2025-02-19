import os from "os";

// Obtener la arquitectura del sistema
console.log("Arquitectura :", os.arch());

// Obtener el SO / Sistema Operativo
console.log("Plataforma :", os.platform());

// Obtener la cantidad total de memoria
console.log("Memoria Total :", os.totalmem());

// Obtener la memoria libre
console.log("Memoria Libre :", os.freemem());

// Obtener la informacion de la CPU
console.log("Informacion de la CPU :", os.cpus());
