const router = require("express").Router();

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send({
    message: "Api is up and healthy!",
  });
});

router.use("/users", require("./users"));
router.use("/auth", require("./auth"));

module.exports = router;
