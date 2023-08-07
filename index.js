// install express package and get paths necessary for running server
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

// open the port for the server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// initiates the server at the specified port
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});
