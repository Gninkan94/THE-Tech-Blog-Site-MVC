// Import all modules and routes

const router = require("express").Router();
const apiRoutes = require("./api");
//const homeRoutes = require("./home-routes");

// letys Set up routes
router.use("/api", apiRoutes);
//router.use("/", homeRoutes);

// this Export the router
module.exports = router;