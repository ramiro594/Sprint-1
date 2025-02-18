import { EventEmitter } from `events`

// crear una instancia de EventEmitter

const emisor = new EventEmitter()

// definir un evento personalizado

emisor.on(`saludo`, (nombre)=>{
    console.log(`hola ${nombre}`)
})

// emitir el evento "saludo"

emisor.emit(`saludo`, `mundo`)