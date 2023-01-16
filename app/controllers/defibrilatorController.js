const Defibrilator = require("../models/defibrilator");

exports.findAllDefibrilators = async (_, response) => {
  const defibrilators = await Defibrilator.findAllDefibrilators();
  response.json(defibrilators);
};
