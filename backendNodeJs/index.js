// index.js
const express = require('express');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/database');
const Item = require('./models/Item');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Define routes
app.post('/items/create', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    console.log("Item created: ", item);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/items/getAll', async (req, res) => {
  try {
    const items = await Item.findAll();
    console.log("Items: ", items);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    await item.update(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    await item.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});