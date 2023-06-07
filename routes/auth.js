const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { createUser, getUserByUsername } = require("../db/adapters/users");
const { authRequired } = require("./utlis");

// POST /api/auth/register
authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if username exists already
    const _user = await getUserByUsername(username);
    if (_user) {
      res.status(409);
      next({
        message: "That user already exists!",
        name: "Auth Error",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({ username, password: hashedPassword });
    delete user.password;

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send({
      success: true,
      message: "Registration Sucessful!",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if username exists already
    const user = await getUserByUsername(username);
    if (!user) {
      res.status(401);
      next({
        message: "There is no user with that username!",
        name: "Auth Error",
      });
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401);
      next({
        message: "Your password is incorrect!",
        name: "Auth Error",
      });
      return;
    }
    delete user.password;

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send({
      success: true,
      message: "Registration Sucessful!",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out!",
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/me", authRequired, (req, res, next) => {
  res.send(req.user);
});

module.exports = authRouter;
