/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


// Configure body parser as request body parsing middleware
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

// So much time spent wondering why none of the API calls worked,
// helps when you actually use the damn routes!
app.use(routes);

// Set mongoose to use promises and configure connection
mongoose.Promise = Promise;
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/nytreact" );

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
