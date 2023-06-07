const usersRouter = require("express").Router();
const { getAllUsers } = require("../db/adapters/users");

// GET /api/users
usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({ success: true, users });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
