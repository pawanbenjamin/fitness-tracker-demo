const client = require("./client");
const { createUser } = require("./adapters/users");
const { createRoutine } = require("./adapters/routines");
const { users, routines, activities } = require("./seedData");
const { createActivity } = require("./adapters/activities");

async function dropTables() {
  console.log("Dropping tables...");
  try {
    await client.query(`
        DROP TABLE IF EXISTS routine_activities;
        DROP TABLE IF EXISTS activities;
        DROP TABLE IF EXISTS routines;
        DROP TABLE IF EXISTS users;
    `);
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
    await client.query(`
        CREATE TABLE activities (
          id SERIAL PRIMARY KEY,
          name TEXT,
          description TEXT,
          UNIQUE(name)
        )
    `);
    await client.query(`
        CREATE TABLE routine_activities (
          id SERIAL PRIMARY KEY,
          routine_id INT REFERENCES routines(id),
          activity_id INT REFERENCES activities(id),
          count INT,
          duration INT,
          UNIQUE (routine_id, activity_id)
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

    const createdActivities = await Promise.all(
      activities.map(async (activity) => {
        return await createActivity(activity);
      })
    );
    console.log("Activities: ", createdActivities);
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
