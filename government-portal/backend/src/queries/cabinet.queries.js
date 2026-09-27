const db = require("../config/db");

async function getAll() {
  const { rows } = await db.query(
    "SELECT * FROM cabinet_members ORDER BY display_order, id"
  );
  return rows;
}

async function create(data) {
  const { name, position, ministry, bio, image_url, display_order = 0 } = data;
  const { rows } = await db.query(
    `INSERT INTO cabinet_members
    (name, position, ministry, bio, image_url, display_order)
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [name, position, ministry, bio, image_url, display_order]
  );
  return rows[0];
}

async function update(id, data) {
  const { name, position, ministry, bio, image_url, display_order = 0 } = data;
  const { rows } = await db.query(
    `UPDATE cabinet_members SET name=$1, position=$2, ministry=$3,
     bio=$4, image_url=$5, display_order=$6 WHERE id=$7 RETURNING *`,
    [name, position, ministry, bio, image_url, display_order, id]
  );
  return rows[0];
}

async function remove(id) {
  await db.query("DELETE FROM cabinet_members WHERE id=$1", [id]);
}

module.exports = { getAll, create, update, remove };
