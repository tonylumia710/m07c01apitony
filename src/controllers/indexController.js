const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'index': (req, res) => {
        db.Genre.findAll()
            .then(response => {
                const genres = JSON.parse(JSON.stringify(response))
                res.render('index', { title: 'Digital Movies', genres });
            })
    },
}

module.exports = genresController;