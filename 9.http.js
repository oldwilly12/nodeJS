//Crear un servidor
const http = require('http')


/* Un servidor puede hacer 2 cosas recivir una peticion o devolver una respuesta 
se va a tener un callback que maneje los request y respuestas */
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo') // cuando recivo un req puedo res-ponder y finalizar con esto  
})

// dodne escuchar el servidor 
server.listen(1234, () => {
    console.log('Server listening on port 1234') // cuando escuche por el servidor mandare el msj
})

// puerto "0" buscar el primer puesto que este vacio
//para saber el puerto cuando se utliza el 0
/*

server.listen(0, () => {
    console.log(`Server listening on port  http://localhost:${server.address().port}`) // cuando escuche por el servidor mandare el msj
})

*/