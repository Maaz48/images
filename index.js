const express = require("express");
const app = express();
const port = 9000;
app.use("/uploads", express.static("uploads"));

app.get("/aaa", (req, res) => {
  res.send("HELLO WORLD....");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
