//EXPORTACIÓN CON MUDULE 
const fs = require('fs');

const crearArchivoTabla = (base = 5) => {

    let salida = '\nVARIABLE SALIDA:\n';

    for(let i = 0; i<=10; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    fs.writeFileSync(`tabla-${base}-modulo.txt`, salida);

    console.log('archivo creado desde importación de modulo');
}

module.exports = {
    crearArchivoTabla
};

