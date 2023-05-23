const router = require("express").Router();

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send("API is healthy!");
});

router.use("/users", require("./users"));
router.use("/auth", require("./auth"));

module.exports = router;
