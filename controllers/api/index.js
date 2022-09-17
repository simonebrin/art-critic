const router = require("express").Router();
//import API routers
const userRoutes = require("./user-route");
const commentRoutes = require("./comment-route");

//attaching api routes to the main router
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
