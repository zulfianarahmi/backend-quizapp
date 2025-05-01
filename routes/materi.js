// routes/materi.js
const express = require("express");
const router = express.Router();

// Dummy data materi
const materi = [
  { id: 1, nama: "Bahasa Indonesia" },
  { id: 2, nama: "Matematika" },
  { id: 3, nama: "IPA" },
  { id: 4, nama: "IPS" },
  { id: 5, nama: "Agama Islam" },
];

// Endpoint untuk mendapatkan daftar materi
router.get("/", (req, res) => {
  res.json(materi);
});

module.exports = router;
