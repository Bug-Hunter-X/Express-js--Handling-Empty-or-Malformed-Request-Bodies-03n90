const express = require('express');
const app = express();
app.use(express.json());

app.post('/user', (req, res) => {
  // Check if req.body is defined and not empty before accessing its properties.
  if (req.body && Object.keys(req.body).length > 0) {
    const user = req.body;
    console.log(user);
    res.send('User created');
  } else {
    res.status(400).send('Invalid or empty request body');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));