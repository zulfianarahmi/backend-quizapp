const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Token tidak ada!" });

  jwt.verify(token, "rahasia", (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token tidak valid!" });
    req.userId = decoded.userId; // Simpan user ID di request
    next(); // Lanjut ke endpoint berikutnya
  });
};
