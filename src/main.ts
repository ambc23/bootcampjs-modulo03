/*
🎵 Pop Rock
🎸 Rock
🤘 Hard Rock
🎼 Clásica
*/

const estiloTitulo = "font-weight: bold; font-size: 18px;background-color: #4CAF50;color:white;padding:5px 20px;";
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

interface Grupo {
    nombreGrupo: string;
    anyoFundacion: number;
    enActivo: boolean;
    genero: string;
}

const grupo1 : Grupo = {
    nombreGrupo: "The Beatles",
    anyoFundacion: 1960,
    enActivo: true,
    genero: `${popRock}`,
};

const grupo2 : Grupo = {
    nombreGrupo: "Queen",
    anyoFundacion: 1970,
    enActivo: false,
    genero: `${rock}`,
};

const grupo3 : Grupo = {
    nombreGrupo: "AC DC",
    anyoFundacion: 1973,
    enActivo: true,
    genero: `${hardRock}`,
};

const grupo4 : Grupo = {
    nombreGrupo: "Ludwig van Beethoven",
    anyoFundacion: 1770,
    enActivo: false,
    genero: `${clasica}`,
};

const grupo5 : Grupo = {
    nombreGrupo: "The Rolling Stones",
    anyoFundacion: 1962,
    enActivo: true,
    genero: `${rock}`,
};

console.log("%c" + grupo1.nombreGrupo, estiloTitulo);
console.log(`Año de fundación: ${grupo1.anyoFundacion}`);
console.log(`¿Está en activo?: ${grupo1.enActivo}`);
console.log(`Género musical: ${grupo1.genero}`);

console.log("%c" + grupo2.nombreGrupo, estiloTitulo);
console.log(`Año de fundación: ${grupo2.anyoFundacion}`);
console.log(`¿Está en activo?: ${grupo2.enActivo}`);
console.log(`Género musical: ${grupo2.genero}`);

console.log("%c" + grupo3.nombreGrupo, estiloTitulo);
console.log(`Año de fundación: ${grupo3.anyoFundacion}`);
console.log(`¿Está en activo?: ${grupo3.enActivo}`);
console.log(`Género musical: ${grupo3.genero}`);

console.log("%c" + grupo4.nombreGrupo, estiloTitulo);
console.log(`Año de fundación: ${grupo4.anyoFundacion}`);
console.log(`¿Está en activo?: ${grupo4.enActivo}`);
console.log(`Género musical: ${grupo4.genero}`);

console.log("%c" + grupo5.nombreGrupo, estiloTitulo);
console.log(`Año de fundación: ${grupo5.anyoFundacion}`);
console.log(`¿Está en activo?: ${grupo5.enActivo}`);
console.log(`Género musical: ${grupo5.genero}`);