const router = require("express").Router();
const sequelize = require("../config/config");
const { Art, Comment, Eval, User } = require("../models");

// get all posts for homepage
/*router.get("/", (req, res) => {
  console.log("======================");
  Art.findAll({})
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});*/

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
