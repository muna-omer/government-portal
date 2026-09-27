const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const logic = require("../logics/cabinet.logics");

router.get("/", async (req, res) => res.json(await logic.getAll()));
router.post("/", auth, async (req, res) => res.status(201).json(await logic.create(req.body)));
router.put("/:id", auth, async (req, res) => res.json(await logic.update(req.params.id, req.body)));
router.delete("/:id", auth, async (req, res) => {
  await logic.remove(req.params.id);
  res.json({ message: "Cabinet member deleted" });
});

module.exports = router;
