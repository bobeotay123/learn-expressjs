const low = require("lowdb"),
      FileSync = require("lowdb/adapters/FileSync"),
      adapter = new FileSync("data/db.json"),
      db = low(adapter);

db.defaults({users: []}).write();

module.exports = db;