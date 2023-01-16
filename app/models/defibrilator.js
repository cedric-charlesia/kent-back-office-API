const client = require("../database");

class Defibrilator {
  constructor(obj = {}) {
    for (const propName in obj) {
      this[propName] = obj[propName];
    }
  }

  static async findAllDefibrilators() {
    try {
      const { rows } = await client.query('SELECT * FROM "defibrilators"');

      // Get all defibrilators

      if (rows) return rows.map((row) => new Defibrilator(row));
      else return null;

      // Get only working defibrilators (state = 0) :

      /* let workingDefibrilators = [];
      rows.forEach((row) => {
        if (row.state === 0) {
          workingDefibrilators.push(new Defibrilator(row));
        }
      });
      return workingDefibrilators;
      */
    } catch (error) {
      if (error.detail) {
        throw new Error(error.detail);
      }
      throw error;
    }
  }
}

module.exports = Defibrilator;
