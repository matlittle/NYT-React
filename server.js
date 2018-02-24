/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


// Configure body parser as request body parsing middleware
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

// Set mongoose to use promises and configure connection
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
