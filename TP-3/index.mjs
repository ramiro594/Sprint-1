import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";


const archivoOriginal = `./superheroes.txt`
const archivoNuevos = `./agregarSuperheroes.txt`


// agregar nuevos superheroes 

agregarSuperheroes(archivoOriginal, archivoNuevos)


// leer y mostrar la lista de superheroes ordenada

const superheroes = leerSuperheroes(archivoOriginal);

console.log(`superHeroes ordenados: `);
console.log(superheroes);
