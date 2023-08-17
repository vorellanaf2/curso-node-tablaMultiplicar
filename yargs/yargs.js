const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption:true,
    describe: 'Es la base del multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    describe: 'Es para listar la tabla'
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption: true,
    describe: 'Hasta donde llega'
})
.check((argv,options)=>  {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser numeros'
    }else{
        return true;
    }
    
}) 
.argv;

module.exports = argv;
