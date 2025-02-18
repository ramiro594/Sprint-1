import path from `path`

// definir una ruta de archivo de ejemplo

const filePath = `./data/example.txt`

// obtener el directorio base

const dirName = path.dirName(filePath)
console.log(`directorio base: `,baseName)

// obtener la extension del archivo

const extName = path.extName(filePath)
console.log(`extension del archivo: `,extName)

// crear una ruta unida

const newPath = path.join(`/user`, `docs`, `newfile.txt`)
console.log(`nueva ruta: `,newPath)