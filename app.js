const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./yargs/yargs');
const colors = require('colors');
console.clear();

console.log(argv);


console.log('base: yargs', argv.base)
//const [ , ,arg3 = 'base=4']= process.argv;
//const [ , base] = arg3.split('=');


//const base = 7;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'Creado'))
    .catch(err => console.log(err));
