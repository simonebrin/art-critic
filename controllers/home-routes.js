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

router.get("/", async (req, res) => {
  try {
    // const artData = await Art.findAll({
    //   include: [Comment, {
    //     model: User
    //   }], [Eval]
    // });
    const artData = await Art.findAll({
      include: [
        {model: Comment,
        include: User,}
      ],
    });
    const art = artData.map((piece) => piece.get({ plain: true }));
    console.log(art);
    console.log(art[0].comments)
    res.render("homepage", { art });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
