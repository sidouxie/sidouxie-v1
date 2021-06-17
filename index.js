const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//Middleware
app.use(express.static("public"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
