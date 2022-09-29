const router = require("express").Router();
const passport = require("passport");
const { User } = require("../../models");

const initializePassport = require("../../passport-config");
initializePassport(
  passport,
  (email) => user.find((user) => user.email === email),
  (id) => user.find((user) => user.id === id)
);

// POST /api/users
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.userId = dbUserData.id;
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//sign in
/*router.post("/login", (req, res) => {
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
      req.session.userId = dbUserData.id;
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});*/

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
