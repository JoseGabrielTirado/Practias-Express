const express = require('express');
const pool = require('./db');
const app = express();

app.get('/', (req, res) => {
  res.send('API funcionando.');
});

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Jose Gabriel Tirado Lopez',
    rol: 'Estudiante de Informatica'
  };

  res.json(usuario);
});

pool.connect()
  .then(() => {
    console.log('Conexion exitosa a PostgreSQL');
  })
  .catch((err) => {
    console.error('Error de conexion', err);
  });
  
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});