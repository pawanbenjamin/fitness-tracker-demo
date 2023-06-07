const router = require("express").Router();

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send({
    message: "Api is up and healthy!",
  });
});

router.use("/auth", require("./auth"));
router.use("/routines", require("./routines"));
router.use("/users", require("./users"));

module.exports = router;
