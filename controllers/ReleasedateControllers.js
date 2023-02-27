const Release = require('../models/ReleaseDate');

module.exports = {
  async create(req, res) {
    try {
      const { release_date } = req.body;
      const release = await Release.create(release_date);
      res.status(201).json(release);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async read(req, res) {
    try {
      const releases = await Release.getAll();
      res.json(releases);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const release = await Release.getById(id);
      if (!release) return res.status(404).json({ error: 'Data de lançamento não encontrada' });
      res.json(release);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro inerno no servidor' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { release_date } = req.body;
      const updatedRelease = await Release.update(id, release_date);
      if (!updatedRelease) return res.status(404).json({ error: 'Data de lançamento não encontrada' });
      res.json(updatedRelease);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedRelease = await Release.delete(id);
      if (!deletedRelease) return res.status(404).json({ error: 'Data de lançamento não encontrada' });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
};