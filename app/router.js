const express = require("express");
const router = express.Router();

// CONTROLLERS
const defibrilatorsController = require("./controllers/defibrilatorController");

// DEFIBRILATORS ROUTE
router.get("/defibrilators", defibrilatorsController.findAllDefibrilators);

module.exports = router;
