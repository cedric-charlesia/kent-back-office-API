require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port || 3001;

const router = require("./app/router");

app.use(router);

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
