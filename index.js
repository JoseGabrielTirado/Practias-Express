const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Jose Gabriel Tirado Lopez',
    rol: 'Estudiante de Informatica'
  };

  res.json(usuario);
});
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});