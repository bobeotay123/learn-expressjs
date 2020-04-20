const db = require("../data/db");
const id = require("../ID");

//Landing page
function index(req, res){
  res.render("search", {users: db.get("users").value()});
}

//Search page 
function search (req, res){
  let keywords = req.query.q;
  let matchedEmployees = db.get("users").value()
    .filter(user => {
      return user.name.toLowerCase()
                          .indexOf(keywords.toLowerCase()) !== -1;
    });
  res.render("search", {
    users: matchedEmployees
  });
} 

const create = {
  GET_Create: function (req,res) {
    res.render("create");
  },
  POST_Create: function(req,res){
    let newUser = req.body;
    newUser.id = id();
    db.get("users").push(newUser).write();
    res.redirect("/users");
  }
};

function viewProfiles (req, res) {
  let id = parseInt(req.params.id);
  let matchedEmployees = db.get("users")
                          .find({id: id})
                          .value();
  res.render("profile", {user: matchedEmployees});
}

module.exports = {
  index: index,
  search: search,
  create: create,
  profileViewer: viewProfiles
}