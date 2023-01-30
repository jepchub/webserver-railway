const express = require('express');
const app = express();

const port = 8080;

// servir contenido estático
app.use(express.static('public'));

// Ruta home
// app.get('/', function (req, res) {
//   res.send('Home page');
// });

// Ruta hola-mundo
app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta');
});

// si el cliente intenta acceder a alguna pagina que no este en las alguna de las rutas permitidas de la app le saldra un mensaje con un error 404
app.get('*', (req, res) => {
  // res.send('404 / Page not found');
  res.sendFile( __dirname + '/public/error404.html');
});

app.listen(port, () => {
  console.log(`App listening on port ${port} at http://localhost:${port}`)
})