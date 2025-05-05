// routes/soal.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// Hanya user dengan token valid yang bisa akses
router.get("/:materi", authMiddleware, (req, res) => {
  // Logika soal di sini...
});

// Dummy data soal
const soal = {
  "Bahasa Indonesia": [
    {
      id: 1,
      soal: "Apa itu kata benda?",
      pilihan: ["Benda", "Nama", "Kerja"],
      jawaban: "Nama",
    },
    {
      id: 2,
      soal: "Apa itu kata kerja?",
      pilihan: ["Benda", "Nama", "Kerja"],
      jawaban: "Kerja",
    },
  ],
  Matematika: [
    { id: 1, soal: "Berapa 2 + 2?", pilihan: ["3", "4", "5"], jawaban: "4" },
    {
      id: 2,
      soal: "Berapa 5 x 2?",
      pilihan: ["10", "12", "15"],
      jawaban: "10",
    },
  ],
};

// Endpoint untuk mendapatkan soal berdasarkan materi
router.get("/:materi", (req, res) => {
  const materi = req.params.materi;
  if (soal[materi]) {
    res.json(soal[materi]);
  } else {
    res.status(404).send("Materi tidak ditemukan");
  }
});

module.exports = router;
