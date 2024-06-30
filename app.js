require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require('./server/routes/main');

// Static Assets
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
      
// Routes
app.use('/', mainRouter);
 

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});