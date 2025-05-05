// index.js
const express = require("express");
const app = express();
const materiRouter = require("./routes/materi"); // Import router materi
// index.js
const soalRouter = require("./routes/soal"); // Import router soal
app.use("/soal", soalRouter);
const authRouter = require("./routes/auth");
app.use(express.json()); // Middleware untuk parsing JSON
app.use("/auth", authRouter); // Gunakan router auth di endpoint /auth
// Gunakan router soal di endpoint /soal

const port = 3000;

// Gunakan router materi di endpoint /materi
app.use("/materi", materiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
