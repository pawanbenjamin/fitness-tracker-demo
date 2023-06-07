const client = require("../client");

async function createRoutine({ name, goal, creator_id, is_public = true }) {
  const {
    rows: [routine],
  } = await client.query(
    `
            INSERT INTO routines (name, goal, creator_id, is_public)
            VALUES ($1,$2,$3,$4)
            RETURNING *;
        `,
    [name, goal, creator_id, is_public]
  );
  return routine;
}

async function getRoutineById() {}

async function deleteRoutineById() {}

async function updateRoutineById() {}

async function getAllPublicRoutines() {}

async function getAllRoutinesByUserId() {}

module.exports = { createRoutine };
