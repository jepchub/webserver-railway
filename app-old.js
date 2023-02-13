// RES SERVER
// console.log('Hola mundo');
const http = require('http');//nos ayuda a crear un servidor web local

// metodo o funcion que nos ayuda a crear el server que contiene un callback que sera disparado con cierts argumentos estos argumentos son(request y response)
// "request" req es lo que estan solicitando por parte del cliente - toda la informacion del url que nos estan pidiendo en mi sitio web "los headers de la peticion los argumentos" es decir todo lo ques es la request es decir la solicitud a mi webserver se encuentra aqui
// "cliente" puede ser cualquier persona que se encuentre con cualquier celular conectandose a su web server , otro servidor que se quiera conectar a su webserver, cualquier cosa que este intentando acceder a algun recurso de mi servidor en el puerto que estoy utilizando
// "response" res es lo que mi server le va a responder cuando procesemos la Request al cliente o a la peticion http

http.createServer( (req, res) => {
  // console.log(req);

  // res.write('Hola mundo'); //aqui escribimos la respuesta a la peticion
  // res.writeHead(404);
  // res.writeHead(201);//se acaba de crear un registro o se acaba de crear algo
  // res.writeHead(200);//todo ok

// Esto significa que estoy regresando un archivo de texto plano , se lo especifico en el headers
// podemos responder lo que querramos mediante los headers
  // res.writeHead(200, { 'Content-Type': 'text-plaine' });
  // res.writeHead(200, { 'Content-Type': 'application/json' });
//Esto añade en los header y Le dice al navegador web que va ser un archivo que se va a descargar junto con un nombre
  // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
  // res.writeHead(200, { 'Content-Type': 'application/csv' });

  // const persona = {
  //   id:1,
  //   nombre:'Jose'
  // }

  // res.write('404 | Page not found');
  // El .write pide un string y persona no esta siendo serializado tiene que ser un string y no un objeto
  // res.write( JSON.stringify(persona));
  // res.write('id, nombre/n');
  // res.write('1, Jose/n');
  // res.write('2, Carlos/n');
  // res.write('3, Pedro/n');
  // res.write('4, Dorito/n');

  res.write('Hola Mundo');

  //aqui le decimos a node que terminamos de escribir la respuesta
  res.end();
})
.listen( 8080 );

console.log('Escuchando en el puerto: ', 8080);