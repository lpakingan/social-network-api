const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// routes for user/thought queries
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
