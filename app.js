const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Hi' });
});

app.post('/', (req, res) => {
  const { name } = req.body;
  console.log({ name });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
