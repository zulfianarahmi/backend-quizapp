const jwt = require("jsonwebtoken");
const router = require("express").Router();

const users = [
  { id: 1, username: "zulfi", password: "satu" },
  { id: 2, username: "rahmi", password: "dua" },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).send("Login gagal");

  const token = jwt.sign({ id: user.id }, "rahasia", { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
