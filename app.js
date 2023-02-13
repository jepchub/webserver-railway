const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// DEV Handlebars
app.set('view engine', 'hbs');
// TODO: require('hbs')
hbs.registerPartials( __dirname + '/views/partials', function(err){});

// servir contenido estático
app.use(express.static('public'));

// Ruta home
// app.get('/', function (req, res) {
//   res.send('Home page');
// });

// Ruta hola-mundo
// app.get('/hola-mundo', function (req, res) {
//   res.send('Hola mundo en su respectiva ruta');
// });

// DEV Ruta index
// El controlador es esta funcion callback que tenemos aqui
// Las options: es todo lo que se quiera enviar o mandar como argumento a la vista que se renderizara
app.get('/', (req, res) => {
  res.render( 'home',{
    nombre: 'Jose Enrique',
    titulo: 'Curso de Node'
  });
});

// DEV Ruta generic
app.get('/generic', (req, res) => {

  // res.sendFile( __dirname + '/public/generic.html')
  res.render('generic',{
    nombre: 'Jose Enrique',
    titulo: 'Curso Node'
  });

});
// DEV Ruta elements
app.get('/elements', (req, res) => {

  // res.sendFile( __dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Jose Enrique',
    titulo: 'Curso Nodejs'
  })

});

// si el cliente intenta acceder a alguna pagina que no este en las alguna de las rutas permitidas de la app le saldra un mensaje con un error 404
app.get('*', (req, res) => {
  // res.send('404 / Page not found');//solo envia texto es decir manda esa informacion
  // sendfile manda el archivo en la ruta que le especifiquemos
  // __dirname es todo el path donde se encuentra la aplicasion, donde esta corriendo
  res.sendFile( __dirname + '/public/error404.html')
});

app.listen(port, () => {
  console.log(`App listening on port ${port} at http://localhost:${port}`)
})