const path = require('path')
//barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)


//obtener nombre del fichero 
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

//solo el nombre del fichero, '.txt' remover esa parte del nombre del fichero
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//traer la extencion '.jpg'
const extrension = path.extname('image.jpg')
console.log(extrension)