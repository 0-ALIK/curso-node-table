/* const fs = require('fs');
const {crearArchivoTabla} = require('./helpers/multiplicar');*/
const {crearArchivoTarea} = require('./helpers/multiplicar-tarea.js');

const argv = require('./config/yargs');
require('./config/colors');




//EJERCICIO - TABLA DE MULTIPLICAR

/* console.log(process.argv); */
console.log('\n', argv);

/* const [, , base] = process.argv;
const [, p] = base.split('=');
parseInt(p); */

const p = argv.b;
const h = argv.h;

/* for(let i = 0; i<=10; i++){
    console.log(`${p} x ${i} = ${p*i}`);
}
 */
//REQUERIR PAQUETES - Systema de ficheros

let salida = '\nVARIABLE SALIDA:\n';

for(let i = 0; i<=h; i++){
    salida += `${p} x ${i} = ${p*i}\n`;
}

if(argv.l){
    console.log(salida);
}
else
    console.log('ok no te mostrare una mierda .i.'.errorM);
/* fs.writeFile(`tabla-${p}.txt`, salida, error =>{

    if(error) throw error; //En caso de que resiva un error

    console.log('archivo creados');

}); */
 

/* fs.writeFileSync(`tabla-${p}.txt`, salida);

console.log('archivo creados');

crearArchivoTabla(p); */

crearArchivoTarea(p, h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(er => console.log(er));

