const client = require("../client");

async function createRoutine({ name, goal, creator_id, is_public = true }) {
  const {
    rows: [routine]
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

async function getRoutineById(id) {
  const {
    rows: [routine]
  } = await client.query(
    `
            SELECT * FROM routines
            WHERE id=$1
        `,
    [id]
  );
  return routine;
}

async function deleteRoutineById(id) {
  const {
    rows: [deletedRoutine]
  } = await client.query(
    `
        DELETE FROM routines
        WHERE id=$1
        RETURNING *
    `,
    [id]
  );
  return deletedRoutine;
}

async function updateRoutineById(id, fields) {
  const setString = Object.keys(fields)
    .map((key, i) => {
      return `${key}=$${i + 1}`;
    })
    .join(`, `);

  const {
    rows: [updatedRoutine]
  } = await client.query(
    `
        UPDATE routines
        SET ${setString}
        WHERE id=${id}
        RETURNING *
    `,
    Object.values(fields)
  );
  return updatedRoutine;
}

async function getAllPublicRoutines() {
  const { rows } = await client.query(`
        SELECT * FROM routines;
    `);
  return rows;
}

async function getAllRoutinesByUserId(id) {
  const { rows } = await client.query(
    `
        SELECT * FROM routines
        WHERE creator_id=$1
    `,
    [id]
  );
  return rows;
}

module.exports = {
  createRoutine,
  getRoutineById,
  deleteRoutineById,
  updateRoutineById,
  getAllPublicRoutines,
  getAllRoutinesByUserId
};
