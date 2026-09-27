const db = require("../config/db");

async function getAll() {
  const { rows } = await db.query("SELECT * FROM institutions ORDER BY name");
  return rows;
}

async function create(data) {
  const { name, description, category, website, logo_url } = data;
  const { rows } = await db.query(
    `INSERT INTO institutions(name,description,category,website,logo_url)
     VALUES($1,$2,$3,$4,$5) RETURNING *`,
    [name, description, category, website, logo_url]
  );
  return rows[0];
}

async function update(id, data) {
  const { name, description, category, website, logo_url } = data;
  const { rows } = await db.query(
    `UPDATE institutions SET name=$1,description=$2,category=$3,
     website=$4,logo_url=$5 WHERE id=$6 RETURNING *`,
    [name, description, category, website, logo_url, id]
  );
  return rows[0];
}

async function remove(id) {
  await db.query("DELETE FROM institutions WHERE id=$1", [id]);
}

module.exports = { getAll, create, update, remove };
