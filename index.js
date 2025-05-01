// index.js
const express = require("express");
const app = express();
const materiRouter = require("./routes/materi"); // Import router materi
// index.js
const soalRouter = require("./routes/soal"); // Import router soal
app.use("/soal", soalRouter); // Gunakan router soal di endpoint /soal

const port = 3000;

// Gunakan router materi di endpoint /materi
app.use("/materi", materiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
