const Description = require('../models/Description');

const DescriptionControllers = {
  async create(req, res) {
    try {
      const { body } = req;
      const description = await Description.create(body);
      res.json(description);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async readAll(req, res) {
    try {
      const descriptions = await Description.getAll();
      res.json(descriptions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const description = await Description.getById(id);
      if (!description) return res.status(404).json({ error: 'Descrição não encontrada' });
      res.json(description);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const description = await Description.update(id, body);
      res.json(description);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Description.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = DescriptionControllers;