const express = require('express');
const cors = require('cors');
const database = require('./config/database');
const airportRoutes = require('./routes/airports');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', airportRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});