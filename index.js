const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 // GET - Récupération de l'ensemble des données de ta table
app.get('/api/music/:id/playlist', (request, response) => {
    connection.query('SELECT * FROM playlist', (error, results) => {
      if (error) {
        response.status(500).send('Erreur lors de  affichage d une playlist')
      } else {
        response.json(results).status(200);
      }
    });
  });

  // GET (light) - Récupération de quelques champs spécifiques (id, names, dates, etc...)
app.get('/api/music/:id/playlist', (request, response) => {
    connection.query('SELECT * FROM playlist', (error, results) => {
      if (error) {
        response.status(500).send('Erreur lors de  affichage d une playlist')
      } else {
        response.json(results).status(200);
      }
    });
  });

  //GET - Récupération de données ordonnées (ascendant, descendant)L'ordre sera passé en tant que paramètre de la route
app.get('/api/music/:id/playlist', (request, response) => {
    connection.query('SELECT * FROM playlist', (error, results) => {
      if (error) {
        response.status(500).send('Erreur lors de  affichage d une playlist')
      } else {
        response.json(results).status(200);
      }
    });
  });

// GET - Récupération d'un ensemble de données en fonction de certains filtres :
app.get('/api/music/:id/playlist', (request, response) => {
  connection.query('SELECT * FROM playlist', (error, results) => {
    if (error) {
      response.status(500).send('Erreur lors de  affichage d une playlist')
    } else {
      response.json(results).status(200);
    }
  });
});

// POST - Sauvegarde d'une nouvelle entité

app.post('/api/music/track', (request, response) => {
    const formData = request.body;
    connection.query('INSERT INTO track SET ?', [formData], (error, results) => {
      if (error) {
        response.status(500).send('Erreur lors de l enregistrement d un nouveau track')
      } else {
        response.json(formData).status(200);
      }
    });
  });

  // PUT - Modification d'une entité

  app.put('/api/music/playlist/:id', (req, res) => {
    const formData = req.body;
    const idPlay = req.body.id;
    connection.query('UPDATE playlist SET ? WHERE id = ?', [formData, idPlay], error => {
      if (error) {
        res.status(500).send('');
      } else {
        res.json(formData).status(200);
      }
    });
  });

  // PUT - Toggle du booléen

  app.put('/api/music/playlist/:id', (req, res) => {
    const formData = req.body;
    const idPlay = req.body.id;
    connection.query('UPDATE playlist SET ? WHERE id = ?', [formData, idPlay], error => {
      if (error) {
        res.status(500).send('');
      } else {
        res.json(formData).status(200);
      }
    });
  });

  

// DELETE - Suppression d'une entité

app.delete('/api/music/:id/playlist', (req, res) => {
    const idPlaylist = req.params.id;
    connection.query('DELETE playlist SET ? WHERE id = ?', [idPlaylist], err => {
      if (err) {
        console.log(err);
    res.status(500).send('Erreur lors de la sauvegarde des playlist');
    } else {
      res.sendStatus(200);
      }
    });
  });

  
  //DELETE - Suppression de toutes les entités dont le booléen est false

  app.delete('/api/music/:id/track', (req, res) => {
    const idTrack = req.params.id;
    connection.query('DELETE track SET ? WHERE id = ?', [idTrack], err => {
      if (err) {
        console.log(err);
    res.status(500).send('Erreur lors de la sauvegarde des track');
    } else {
      res.sendStatus(200);
      }
    });
  });


app.listen(port, (err) => {
  if (err) {
    throw new Error('');
  }
  console.log(`Server is listening on ${port}`)
});