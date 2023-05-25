const client = require("../client");

async function createUser({ username, password }) {
  const {
    rows: [user],
  } = await client.query(
    `
        INSERT INTO users(username, password)
        VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
    `,
    [username, password]
  );
  return user;
}

async function getAllUsers() {
  const { rows } = await client.query(`
    SELECT * FROM users;
  `);
  return rows;
}

const getUserByUsername = async (username) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE username = $1
    `,
    [username]
  );
  return user;
};

module.exports = { createUser, getAllUsers, getUserByUsername };
