//BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require('sequelize');

//CRIANDO A CONFIGURAÇÃO DO BANCO DE DADOS
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './videoteca.sqlite'
})

//TRATAMENTO POSSÍVEIS ERROS E AUTENTICAÇÃO NO BANCO
try {
    sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
    console.log("Erro ao conectar ao banco de dados: " + erro);
};

module.exports = sequelize;
