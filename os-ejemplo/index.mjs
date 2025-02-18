import os from `os`

// obtener la arquitectura del sistema
console.log(`arquitectura: `, os.arch())

// obtener el tipo de sistema operativo

console.log(`plataforma: `, os.plataform())

// obtener la cantidad total de memoria

console.log(`memoria total: `, os.totalmem())

// obtener l memoria libre

console.log(`memoria libre: `, os.freemem())

// obtener la informacion de la cpu

console.log(`informacion de la cpu: `, os.cpus())