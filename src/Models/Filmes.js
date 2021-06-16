const mongoose = require('mongoose');

const FilmesSchema = new mongoose.Schema({
    picture:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Filmes', FilmesSchema);