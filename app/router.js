const express = require("express");
const router = express.Router();

// DEFIBRILATORS ROUTE
router.get("/defibrilators", (_, response) => {
  response.status(200).send("Defibrilator route is working");
});

module.exports = router;
