const LocalStrategy = require("passport-local");
const router = require("express").Router();
const passport = require("passport");
const { User } = require("../../models");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

/*const initializePassport = require("../../passport-config");
initializePassport(
  passport,
  (email) => User.find((user) => user.email === email),
  (id) => User.find((user) => user.id === id)
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
});*/

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

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    console.log("==========", username, "===============");
    User.findOne({
      where: {
        username: username,
        //password: req.body.password,
      },
    })
      .then((dbUserData) => {
        console.log("==========", dbUserData, "===============");
        if (dbUserData.password === password) {
          return cb(null, dbUserData);
        }
      })
      .catch((err) => {
        console.log(err);
        //res.status(500).json(err);
      });
  })
);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (req, res) {
    res.send(req.user.username);
  }
);

module.exports = router;
