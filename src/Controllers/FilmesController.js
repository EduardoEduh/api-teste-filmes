const Filmes = require('../Models/Filmes');

exports.CreateFilmes = async(req, res)=>{
    const { picture } = req.body

    try {

        const filmesCreate = await Filmes.create({
            picture
        });

        return res.status(201).send({
            message: "Filme adicionado com sucesso",
            data: filmesCreate
        })
        
    } catch (error) {
        return res.status(400).send({message:'Erro na criação de filme !'})
    }
};

//Listando os filmes:
exports.ListFilmes = async(req, res)=>{
    try {

        const filmesList = await Filmes.find();

        return res.status(201).send({
            message: 'Acesso a lista de filmes',
            data: filmesList
        })
        
    } catch (error) {
        return res.status(400).send({message:'Erro na listagem de filmes !'})
    }
};