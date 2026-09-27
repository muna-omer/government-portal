const router = require("express").Router();
const { login } = require("../logics/auth.logics");
const { register } = require("../logics/auth.logics");
const auth = require("../middleware/auth.middleware");

router.post("/login", async (req, res) => {
  try {
    const result = await login(req.body.username, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.post("/users", auth, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Administrator access required" });
  }

  try {
    const user = await register(req.body.username, req.body.password, req.body.role);
    res.status(201).json({ user });
  } catch (err) {
    res.status(err.message.includes("required") || err.message.includes("Password") || err.message.includes("Username") ? 400 : 500).json({ message: err.message });
  }
});

module.exports = router;
