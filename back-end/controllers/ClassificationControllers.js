const Classification = require('../models/Classification');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const classification = await Classification.create(name);
      res.status(201).json(classification);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async read(req, res) {
    try {
      const classifications = await Classification.getAll();
      res.json(classifications);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const classification = await Classification.getById(id);
      if (!classification) return res.status(404).json({ error: 'Classificação não encontrada' });
      res.json(classification);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const classification = await Classification.update(id, name);
      if (!classification) return res.status(404).json({ error: 'Classificação não encontrada' });
      res.json(classification);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const classification = await Classification.delete(id);
      if (!classification) return res.status(404).json({ error: 'Classificação não encontrada' });
      res.status(204).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
};