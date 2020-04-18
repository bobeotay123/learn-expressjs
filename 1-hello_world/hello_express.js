
//Require Expressjs modules
const express = require("express");

//Create new app
const app = express();

//Set port
const port = 3000;

// get method (entry_point,callback)
app.get('/', (request, response)=>{
  // Request: gửi đi get method lên server
  //Response: nhận data về tự server
  let content = "Hello world";
  response.send("<h1><ul>" + content + "</ul></h1>");
});

// start server
app.listen(port, ()=>{
  console.log('Server started on ports: ', port);
});