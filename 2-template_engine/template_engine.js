const express = require("express");

const app = express();

const port = 3000;

//Pug là Template Engine dùng sinh mã HTML

//Set templete engine: 
/** 
 * set(view engine, pug) => set the view engine (pug)
 * set(views, view_folder) => set the templates folder
 * 
 * */


app.set("view engine", "pug");
app.set("views", "./views");

/** app.render():
 * path
 * variables
*/
const name = 'Quang';

app.get('/', function(req, res){
  res.render("page", {
    myName: name
  });

});

//Start server 
app.listen(port, function(){
  console.log("Server is starting at port " + port);
});