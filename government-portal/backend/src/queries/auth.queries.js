const db = require("../config/db");

async function findUser(username) {
  const result = await db.query(
    "SELECT id, username, password_hash, role FROM users WHERE username = $1",
    [username]
  );
  return result.rows[0];
}

async function createUser(username, passwordHash, role = "admin") {
  const result = await db.query(
    "INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3) RETURNING id, username, role, created_at",
    [username, passwordHash, role]
  );
  return result.rows[0];
}

module.exports = { findUser, createUser };
