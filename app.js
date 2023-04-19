const express = require('express');
const app = express();
const port = 3000;

const data = {};

app.use(express.json());
app.get('/', (req, res) => {
  if (data.name) {
    res.json({ message: `Hi, ${data.name}` });
  } else {
    res.json({ message: 'Hi' });
  }
});

app.post('/', (req, res) => {
  const { name } = req.body;
  data.name = name;
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
