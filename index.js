require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port || 3001;

const router = require("./app/router");

//---CORS Access
const cors = require("cors");
app.use(
  cors({
    origin: process.env.ALLOWED_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 3600,
  })
);

// Sanitizer
const cleaner = require("./app/middlewares/cleaner");

app.use(cleaner);

app.use(router);

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
