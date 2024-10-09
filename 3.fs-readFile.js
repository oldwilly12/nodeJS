const fs = require('fs/promises')

console.log('Leyendo el primer archivo...')
// se utiliza el utf-8 para hacer el baffer que se manda como arichivo a algo leible
fs.readFile('./archivo.txt', 'utf-8')  //<--------- ejecutas este callback
    .then(text => {
        console.log('Primer texto: ', text)
    })

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text =>{
    console.log('Segundo texto:', text)
})