const client = require("../client");

async function createActivity({ name, description }) {
  const {
    rows: [activity],
  } = await client.query(
    `
      INSERT INTO activities(name, description)
      VALUES ($1, $2)
      ON CONFLICT (name) DO NOTHING
      RETURNING *
  `,
    [name, description]
  );
  return activity;
}

async function getActivityById(id) {}

async function getAllActivities() {
  const { rows } = await client.query(` 
      SELECT * FROM activities;
  `);
  return rows;
}

async function updateActivityById(id) {}

async function deleteActivityById(id) {}

module.exports = {
  createActivity,
  getActivityById,
  getAllActivities,
  updateActivityById,
  deleteActivityById,
};
