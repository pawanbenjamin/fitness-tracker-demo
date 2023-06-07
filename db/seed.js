const client = require("./client");
const { createUser } = require("./adapters/users");
const { createRoutine } = require("./adapters/routines");
const { users, routines } = require("./seedData");

async function dropTables() {
  console.log("Dropping tables...");
  try {
    await client.query(`DROP TABLE IF EXISTS routines`);
    await client.query(`DROP TABLE IF EXISTS users;`);
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables...");
  try {
    await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);
    await client.query(`
        CREATE TABLE routines(
          id SERIAL PRIMARY KEY,
          creator_id INTEGER REFERENCES users(id),
          is_public BOOLEAN DEFAULT true,
          name TEXT UNIQUE NOT NULL,
          goal TEXT
        )
      `);
  } catch (error) {
    console.log(error);
  }
}

async function populateTables() {
  console.log("Populating tables...");
  try {
    const createdUsers = await Promise.all(
      users.map(async (user) => {
        return await createUser(user);
      })
    );

    console.log("Users: ", createdUsers);
    const createdRoutines = await Promise.all(
      routines.map(async (routine) => {
        return await createRoutine(routine);
      })
    );
    console.log("Routines: ", createdRoutines);
  } catch (error) {
    console.error(error);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
