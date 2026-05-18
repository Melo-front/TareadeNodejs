const http = require('http');

const servidor = http.createServer((req, res) => {
res.write('Hola Mundo');
res.end();
});

servidor.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde Express');
    
});

app.listen(4000, () => {
    console.log('Servidor ejecutándos http://localhost:4000');
});