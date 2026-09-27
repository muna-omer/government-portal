const router = require("express").Router();
const q = require("../queries/contact.queries");
const auth = require("../middleware/auth.middleware");

router.post("/", async (req, res) => {
  try {
    const result = await q.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  res.json(await q.getAll());
});

module.exports = router;
