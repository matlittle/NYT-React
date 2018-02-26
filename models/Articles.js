var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  web_url: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
});

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
