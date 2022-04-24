require('./colors');

const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        describe: 'Muestra la tabla por consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 12,
        describe: 'Especifica hasta que número imprime la tabla'
    })
    .check( (argv, options) => {

        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'El argumento "b" o "h" debe ser un número'.errorM;
        }

        return true;
    } )
    .argv;

module.exports = argv;