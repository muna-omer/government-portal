const db = require("../config/db");

async function create(data) {
  const { name, email, subject, message } = data;
  const { rows } = await db.query(
    `INSERT INTO contact_messages(name,email,subject,message)
     VALUES($1,$2,$3,$4) RETURNING *`,
    [name, email, subject, message]
  );
  return rows[0];
}

async function getAll() {
  const { rows } = await db.query(
    "SELECT * FROM contact_messages ORDER BY created_at DESC"
  );
  return rows;
}

module.exports = { create, getAll };
