const router = require("express").Router();
const { User } = require("../../models");

// POST /api/users
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//sign in
router.post("/login", (req, res) => {
  console.log("===================ROUTE HIT================");
  console.log(req.body);
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((dbUserData) => {
      if (dbUserData === null) {
        res.sendStatus(400);
        return;
      }
      console.log(dbUserData);
      req.session.save(() => {
        (req.session.userId = dbUserData.id),
          (req.session.username = dbUserData.username),
          (req.session.loggedIn = true);
      });
      console.log(req.session);

      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
