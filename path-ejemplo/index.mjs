import path from "path";

// Define una ruta de archivo
const filePath = "./data/example.txt";

// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log("Direccion base :", dirName);

// Obtener el nombre del archivo sin extension
const baseName = path.basename(filePath, ".txt");
console.log("Nombre del archivo", baseName);

// Obtener la extension del archivo
const extName = path.extname(filePath);
console.log("Extension del archivo", extName);

// Crear ruta unida
const newPatch = path.join("/user", "docs", "newfile.txt");
console.log("Nueva ruta", newPatch);
