const db = require("../config/db");

async function getAll() {
  const { rows } = await db.query(
    "SELECT * FROM media ORDER BY published_at DESC, id DESC"
  );
  return rows;
}

async function create(data) {
  const { title, summary, content, image_url } = data;
  const { rows } = await db.query(
    `INSERT INTO media(title,summary,content,image_url)
     VALUES($1,$2,$3,$4) RETURNING *`,
    [title, summary, content, image_url]
  );
  return rows[0];
}

async function update(id, data) {
  const { title, summary, content, image_url } = data;
  const { rows } = await db.query(
    `UPDATE media SET title=$1,summary=$2,content=$3,image_url=$4
     WHERE id=$5 RETURNING *`,
    [title, summary, content, image_url, id]
  );
  return rows[0];
}

async function remove(id) {
  await db.query("DELETE FROM media WHERE id=$1", [id]);
}

module.exports = { getAll, create, update, remove };
