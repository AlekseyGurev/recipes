const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('frontend/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./frontend/dist/index.html'));
});

app.get('/frontend/src/assets/img/:name', function (req, res) {
  const { name } = req.params;
  res.sendFile(path.resolve(`./frontend/src/assets/img/${name}`));
});

app.listen(port, () => console.log('server has been started on port 3000 ...'));
