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
);*/

// POST /api/users
/*router.post("/", (req, res) => {
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

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

passport.use(
  "local",
  new LocalStrategy(function verify(/*username,*/ email, password, cb) {
    console.log("==========", email, "===============");
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((dbUserData) => {
        console.log("==========", dbUserData, "===============");

        if (!dbUserData.password === password) {
          return cb(null, false);
        }

        if (dbUserData.password === password) {
          return cb(null, dbUserData);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  })
);

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
