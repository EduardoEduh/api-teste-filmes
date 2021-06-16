const express = require('express');
const FilmesControllers = require('./Controllers/FilmesController');


const router = express.Router();

//Criando as rotas;

//Rota de criar filme
router.post('/create-filmes', FilmesControllers.CreateFilmes);

//Rota de listar os filmes criados:
router.get('/list-filmes', FilmesControllers.ListFilmes);

module.exports = router;