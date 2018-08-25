// Requires
const fs = require('fs');

let data = '';

for (let tabla = 1; tabla < 4; tabla++) {
    data += (`\n\nEl multiplo de ${tabla} \n`);
    for (let i = 1; i <= 10; i++) {
        //console.log(`El multiplo de ${tabla} * ${i} es `, tabla * i, '\n');
        //console.log(`El multiplo de ${tabla} * ${i} es ${tabla * i} `);
        data += (`El multiplo de ${tabla} * ${i} es ${tabla * i}\n`);
    }
}

fs.writeFile('tablas.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('Archivo guardado!');
});

//console.log(module);
//console.log(process);