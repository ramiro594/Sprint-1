import fs from "fs"; // Asegúrate de tener 'fs' como parte de tu entorno Node.js

// Leer un archivo de manera asíncrona
fs.readFile("./data/example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:", data);
});

// Escribir en un nuevo archivo de manera asíncrona
fs.writeFile("./data/newfile.txt", "Contenido nuevo", (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
    return;
  }
  console.log("Archivo creado y escrito");
});

// Renombrar un archivo de manera asíncrona
fs.rename("./data/newfile.txt", "./data/renamedfile.txt", (err) => {
  if (err) {
    console.error("Error al renombrar el archivo:", err);
    return;
  }
  console.log("Archivo renombrado");
});
