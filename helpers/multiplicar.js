const { rejects } = require('assert');
const { promises } = require('dns');
const fs = require('fs');
const { resolve } = require('path');
const { argv } = require('process');
const colors = require('colors')

const crearArchivo = async( base=5,listar = false,hasta=0 ) =>{
    try {
        
        let salida= '';
        let tabla=`tabla-${base}.txt creado`;
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('==================='.green)
            console.log(` TABLA DEL: ${base}`)
            console.log('===================')
            console.log(salida);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`,salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
   

}

module.exports = {
    crearArchivo
}