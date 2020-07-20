const db = require("../../data/db");

const GET = function (req, res) {
  res.render("login");
}

const POST = function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  console.log({username,password});
  if(!username){
    error.username = "Missing username";
    return;
  }
  if(!password){
    error.password = "Missing password";
    return;
  }
  const tempUser = db.get("users").value();
  console.log(tempUser);
}

module.exports = {
  GET: GET,
  POST: POST
}