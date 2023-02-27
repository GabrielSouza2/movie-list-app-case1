const Movie = require('../models/Movie');

module.exports = {
  async create(req, res) {
    try {
      const { title, director_id, classification_id, release_date_id, description_id } = req.body;
      const movie = await Movie.create(title, director_id, classification_id, release_date_id, description_id);
      res.status(201).json(movie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async readAll(req, res) {
    try {
      const movies = await Movie.getAll();
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.getById(id);
      if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
      res.json(movie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, director_id, classification_id, release_date_id, description_id } = req.body;
      const movie = await Movie.update(id, { title, director_id, classification_id, release_date_id, description_id });
      res.json(movie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.delete(id);
      if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  }
};