// console.log('Hola mundo');
const http = require('http');//nos ayuda a crear un servidor web local

// metodo o funcion que nos ayuda a crear el server que contiene un callback que sera disparado con cierts argumentos estos argumentos son(request y response)
// "request" es lo que estan solicitando - toda la informacion del url que nos estan pidiendo en mi sitio web "los headers de la peticion los argumentos" es decir todo lo ques es la request es decir la solicitud a mi webserver se encuentra aqui
// "response" es lo que mi server le va a responder al cliente o a la peticion http

http.createServer( (req, res) => {
  res.write('Hola mundo'); //aqui escribimos la respuesta a la peticion
  res.end(); //aqui le decimos a node que terminamos de escribir la respuesta
})
.listen( 8080 );

console.log('Escuchando en el puerto: ', 8080);