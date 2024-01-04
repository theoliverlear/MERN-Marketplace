const express = require("express");
const app = express();
const port = 5000;
app.use(express.static(__dirname));

app.get("/search", (req, res) => {
  console.log("Received a search request");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

