const Director = require('../models/Director');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const director = await Director.create({ name });
      res.json(director);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async read(req, res) {
    try {
      const directors = await Director.getAll();
      res.json(directors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const director = await Director.getById(id);
      if (!director) return res.status(404).json({ error: 'Diretor não encontrado' });
      res.json(director);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const director = await Director.update(id, { name });
      res.json(director);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Director.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor interno' });
    }
  },
};
