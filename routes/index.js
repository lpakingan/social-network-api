const router = require("express").Router();
const apiRoutes = require("./api");

// direct to api routes
router.use("/api", apiRoutes);

// send error when there is an invalid route
router.use((req, res) => res.send("Route not found!"));

module.exports = router;
