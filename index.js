const sqlite = require('sqlite'),
      Sequelize = require('sequelize'),
      request = require('request'),
      express = require('express'),
      app = express();

const { PORT=3000, NODE_ENV='development', DB_PATH='./db/database.db' } = process.env;

// START SERVER
Promise.resolve()
  .then(() => app.listen(PORT, () => console.log(`App listening on port ${PORT}`)))
  .catch((err) => { if (NODE_ENV === 'development') console.error(err.stack); });

// ROUTES
app.get('/films/:id/recommendations', getFilmRecommendations);

// ROUTE HANDLER
function getFilmRecommendations(req, res) {

//this should get all the films by id
  db.Films.getAll({

    where: {
      id: req.params.id
    }

  }).then(function(film){
    let genreID = film[0].genre_id,
    releaseYear = parseInt(film[0].release_date.substring(0,4)),
    fifteenYearsBefore = (releaseYear - 15),
    fifteenYearsAfter = (releaseYear + 15);
    let recommendFilms = [];

//this should get all films by genre
    db.Films.findAll({
      where: {
        genre_id: genreId
      }
    }).then(function(selectedFilms){
      for(i = 0, i < selectedFilms, i++) {
        let grabYear = parseInt(selectedFilms[i].release_date.substring(0, 4));
        if (grabYear <= fifteenYearsAfter && grabYear >= fifteenYearsBefore) {
          recommendFilms.push(selectedFilms[i]);
        }
      }
      res.json({'recommendations': recommendFilms});
    });
  })
  res.status(500).send('Not Implemented');
}

module.exports = app;
