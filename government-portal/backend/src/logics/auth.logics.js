const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUser, createUser } = require("../queries/auth.queries");

async function login(username, password) {
  const user = await findUser(username);

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    throw new Error("Invalid username or password");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  return {
    token,
    user: { id: user.id, username: user.username, role: user.role }
  };
}

async function register(username, password, role = "admin") {
  if (!username || !password) throw new Error("Username and password are required");
  if (password.length < 8) throw new Error("Password must be at least 8 characters");
  if (!/^[a-zA-Z0-9_.-]+$/.test(username)) throw new Error("Username contains invalid characters");

  const passwordHash = await bcrypt.hash(password, 10);
  try {
    return await createUser(username, passwordHash, role === "editor" ? "editor" : "admin");
  } catch (error) {
    if (error.code === "23505") throw new Error("Username already exists");
    throw error;
  }
}

module.exports = { login, register };
