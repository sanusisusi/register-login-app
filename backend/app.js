const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db')
//const db = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
const port = 5000;

connectToDatabase();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/api', authRoutes);

//const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
