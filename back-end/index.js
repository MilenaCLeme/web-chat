const express = require('express');
const error = require('./middleware/error');
const root = require('./controllers/root');

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3001;

app.use(root);
app.get('/', (_req, res) => console.log("hello"));
app.use(error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));