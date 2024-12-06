// index.js
const express = require('express');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/database');
const Item = require('./models/Item');  // Modelo SQL
const MongoItem = require('./models/MongoItem');  // Modelo MongoDB
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Using CORS to test
app.use(cors());

// Connect to databases
connectDB();  // SQL

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('MongoDB connection error:', err);
  }
};

connectMongoDB();
// SQL Routes
app.post('/sql/create', async (req, res) => {
  try {
    console.log("sql/create Received: ");
    console.log(req.body);
    const item = await Item.create(req.body);
    console.log("Item created: ", item);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/sql/getAll', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/sql/update/:id', async (req, res) => {
  try {
    console.log("sql/update Received: ");
    console.log(req.body);
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

app.delete('/sql/delete/:id', async (req, res) => {
  try {
    console.log("sql/delete Received: ");
    console.log(req.body);
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    await item.destroy();
    res.status(204).json({
      message: `Item ${req.params.id} deleted successfully`
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // NoSQL Routes (MongoDB)
app.post('/nosql/create', async (req, res) => {
  try {
    const newItem = new MongoItem(req.body);  // Crear nuevo documento MongoDB
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/nosql/getAll', async (req, res) => {
  try {
    const items = await MongoItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/nosql/update/:id', async (req, res) => {
  console.log("nosql/update Received: ");
  MongoItem.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(item);
  });
});

app.delete('/nosql/delete/:id', async (req, res) => {
  try {
    const result = await MongoItem.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sync SQL database and start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
