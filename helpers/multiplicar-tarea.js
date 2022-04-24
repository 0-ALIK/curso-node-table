//EXPORTACIÓN CON MUDULE
const fs = require('fs');
require('../config/colors');

//forma 1 de hacerlo
/* const crearArchivoTarea = (base = 5) => {

    return new Promise( resolve =>{
        let salida = '\nVARIABLE SALIDA:\n';

        for(let i = 0; i<=10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFileSync(`tabla-${base}-modulo-tarea.txt`, salida);

        resolve(`tabla-${base}-modulo-tarea.txt`);
    } );
} */

//forma 2 de hacerlo
const crearArchivoTarea = async (b, h) => {

    try {
        
        let salida = '\nVARIABLE SALIDA:\n';
    
        for(let i = 0; i<=h; i++){
            salida += `${b} x ${i} = ${b*i}\n`;
        }

    
        fs.writeFileSync(`./lib/tabla-${b}-modulo-tarea.txt`, salida);
    
        return `tabla-${b}-modulo-tarea.txt`.hecho;


    } catch (error) {
        throw error; 
    }

}


module.exports = {
    crearArchivoTarea
};