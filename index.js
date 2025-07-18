const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);
async function connectDB() {
  await client.connect();
  console.log('Connected to MongoDB');
}
connectDB();

app.use(express.json());
app.get('/', (req, res) => res.send('EnergyForge Backend Running'));

app.listen(5000, () => console.log('Server running on port 5000'));
