const path = require("path");
var passport = require("passport");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const { addHook } = require("./models/User");
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

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.session(sess));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  require("./seeds");
  app.listen(PORT, () => console.log("Now listening"));
});
