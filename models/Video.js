const Sequelize = require("sequelize");
const database = require("../db/db");

const Video = database.define('video', {
    id_video: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { database, modelName: 'video', tableName: 'videos' })

module.exports = Video;