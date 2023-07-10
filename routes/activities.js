const { getAllActivities } = require("../db/adapters/activities");
const activitiesRouter = require("express").Router();

activitiesRouter.get("/", async (req, res, next) => {
  try {
    const activities = await getAllActivities();
    res.send({
      success: true,
      message: "Fetched all activities from DB!",
      data: activities,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = activitiesRouter;
