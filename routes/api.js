const router = require("express").Router();
const articleController = require("../controllers/articleController");

// Matches with "/api/article"
router.route("/article")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/article/:id"
router.route("/article/:id")
  .put(articleController.update)
  .delete(articleController.remove);


module.exports = router;
