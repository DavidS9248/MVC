const express = require('express');
const path = require('path');
const mainController = require('./controllers/mainController');
const itemModel = require('./models/itemModel');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', mainController.index);

app.get('/api/items', (req, res) => {
  const items = itemModel.getItems();
  res.json(items);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
