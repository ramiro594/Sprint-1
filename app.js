import express from `express`

// crear una instancia de express

const app = express()

// configurar el puerto en el que el servidor escuchará

const PORT = 3000

// ruta basica

app.get(`/`, (req, res)=>{
    res.send(`hola, mundo!`)
})

// iniciar el servidor 

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})