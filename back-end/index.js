const express = require('express');
const cors = require('cors');
const error = require('./middleware/error');
const root = require('./controllers/root');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: `http://localhost:${process.env.PORT}` || 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use(root);
app.use(error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));