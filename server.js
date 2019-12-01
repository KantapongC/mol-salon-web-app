const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

// Initialise Express App
const app = express();

// Connect Database
connectDB();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
