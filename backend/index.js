const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.00',
        aluno: 'Lucas Belles'
    });
});

app.listen(3333);