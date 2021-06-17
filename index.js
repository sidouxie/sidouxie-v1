const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//Middleware
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello ");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
