const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const passport = require("passport");
const flash = require("express-flash");
const SQLiteStore = require("connect-sqlite3")(session);

/*const initializePassport = require("./passport-config");
initializePassport(passport, (email) => {
  return user.find((user) => user.email === email);
});*/

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const { userInfo } = require("os");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
//app.use(passport.authenticate(session));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
