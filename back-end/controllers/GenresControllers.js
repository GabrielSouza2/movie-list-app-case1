const Genre = require('../models/Genre');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const genre = await Genre.create(name);
      res.json(genre);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async read(req, res) {
    try {
      const genres = await Genre.getAll();
      res.json(genres);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const genre = await Genre.getById(id);
      if (!genre) return res.status(404).json({ error: 'Gênero não encontrado' });
      res.json(genre);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const genre = await Genre.update(id, { name });
      res.json(genre);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Genre.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}