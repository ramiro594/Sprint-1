import express from `express`

const app = express()

const PORT = 3000

// ruta get para el home

// solicitud: http://localhost:3000/

app.get(`/`, (req, res)=>{
    res.send(`página de inicio`)
})

// ruta get para recibir datos simples
// solicitud: http://localhost:3000/data

app.get(`/data`, (req, res)=>{
    res.send(`datos recibidos`)
})