const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')


const saludoArcoiris = params.name
console.log(`Hola ${saludoArcoiris}!`.rainbow)
