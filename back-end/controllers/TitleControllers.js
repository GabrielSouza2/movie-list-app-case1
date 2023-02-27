const Title = require('../models/Title');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const title = await Title.create(name);
      res.status(201).json(title);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async read(req, res) {
    try {
      const titles = await Title.getAll();
      res.json(titles);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async readOne(req, res) {
    try {
      const { id } = req.params;
      const title = await Title.getById(id);
      if (!title) return res.status(404).json({ error: 'Title not found' });
      res.json(title);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedTitle = await Title.update(id, name);
      if (!updatedTitle) return res.status(404).json({ error: 'Title not found' });
      res.json(updatedTitle);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedTitle = await Title.delete(id);
      if (!deletedTitle) return res.status(404).json({ error: 'Title not found' });
      res.json(deletedTitle);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};