const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    db.Articles.find({})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    console.log(req.body);
    db.Articles.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Articles.findOneAndUpdate(
      { _id: req.params.id }, 
      {note: req.body.note})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  remove: (req, res) => {
    console.log(req.params);
    db.Articles.findById({ _id: req.params.id })
      .then(searchRes => searchRes.remove())
      .then(deleteRes => res.json(deleteRes))
      .catch(err => res.status(422).json(err));
  }
};



